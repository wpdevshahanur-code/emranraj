import { createServerFn } from "@tanstack/react-start";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service?: string;
  message: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
}

const DEFAULT_WP_ENDPOINT = "https://itsemranraj.com/wp-admin/admin-ajax.php";
const DEFAULT_FORM_ID = "1";

function buildDataPayload(data: ContactFormData): string {
  const dataParams = new URLSearchParams();
  const nameParts = (data.name || "").trim().split(/\s+/);
  const firstName = nameParts[0] || data.name;
  const lastName = nameParts.slice(1).join(" ");

  dataParams.append("name", data.name);
  dataParams.append("names[first_name]", firstName);
  if (lastName) {
    dataParams.append("names[last_name]", lastName);
  }
  dataParams.append("email", data.email);
  if (data.company) dataParams.append("company", data.company);
  if (data.budget) dataParams.append("budget", data.budget);
  if (data.service) dataParams.append("service", data.service);
  if (data.message) {
    dataParams.append("message", data.message);
    dataParams.append("description", data.message);
    dataParams.append("project_details", data.message);
  }

  return dataParams.toString();
}

export const submitContactFormFn = createServerFn({ method: "POST" })
  .validator((data: ContactFormData) => data)
  .handler(async ({ data }): Promise<SubmissionResult> => {
    const WP_ENDPOINT = process.env.VITE_WP_AJAX_URL || DEFAULT_WP_ENDPOINT;
    const FORM_ID = process.env.VITE_FLUENT_FORM_ID || DEFAULT_FORM_ID;

    const payload = new URLSearchParams();
    payload.append("action", "fluentform_submit");
    payload.append("form_id", FORM_ID);
    payload.append("data", buildDataPayload(data));

    try {
      const res = await fetch(WP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: payload.toString(),
      });

      const text = await res.text();
      let json: any = null;
      try {
        json = JSON.parse(text);
      } catch {
        // Response is plain text (e.g. "0")
      }

      if (json && (json.insert_id || json.result?.action === "hide_form" || json.result?.message)) {
        return {
          success: true,
          message: json.result?.message || "Thank you! Your message has been sent successfully.",
        };
      }

      if (json?.errors) {
        const errorMsg = Object.values(json.errors).flat().join(", ");
        return {
          success: false,
          message: errorMsg || "Validation failed on the server.",
        };
      }

      if (text === "0") {
        return {
          success: false,
          message:
            "WordPress received the request, but Fluent Forms did not process it (Form ID " +
            FORM_ID +
            "). Ensure Fluent Forms is active on itsemranraj.com.",
        };
      }

      return {
        success: true,
        message: "Thank you! Your message has been received.",
      };
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || "Server connection error.",
      };
    }
  });

export async function submitContact(formData: ContactFormData): Promise<SubmissionResult> {
  // First attempt via serverless proxy function (no CORS restrictions)
  try {
    const res = await submitContactFormFn({ data: formData });
    // If it succeeded or returned structured validation error from WP
    if (res.success || !res.message.includes("connection error")) {
      return res;
    }
  } catch (err) {
    console.warn("Server function failed, trying direct client submission fallback...", err);
  }

  // Fallback: direct client fetch
  try {
    const payload = new URLSearchParams();
    payload.append("action", "fluentform_submit");
    payload.append("form_id", DEFAULT_FORM_ID);
    payload.append("data", buildDataPayload(formData));

    const res = await fetch(DEFAULT_WP_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: payload.toString(),
    });

    const text = await res.text();
    let json: any = null;
    try {
      json = JSON.parse(text);
    } catch {
      // not json
    }

    if (json && (json.insert_id || json.result?.action === "hide_form" || json.result?.message)) {
      return {
        success: true,
        message: json.result?.message || "Thank you! Your message has been sent successfully.",
      };
    }

    if (json?.errors) {
      return {
        success: false,
        message: Object.values(json.errors).flat().join(", ") || "Validation failed.",
      };
    }

    if (text === "0") {
      return {
        success: false,
        message: "WordPress received the request, but Fluent Forms did not process it.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been received.",
    };
  } catch (clientErr: any) {
    return {
      success: false,
      message: clientErr?.message || "Could not connect to WordPress. Please check your internet or reach out directly.",
    };
  }
}
