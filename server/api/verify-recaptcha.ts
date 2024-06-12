// server/api/verify-recaptcha.ts
import { defineEventHandler, readBody } from "h3";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { token } = body;

  const secretKey = "your_secret_key"; // Replace with your secret key
  const response = $fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();

  if (data.success) {
    return { success: true };
  } else {
    return { success: false, error: data["error-codes"] };
  }
});
