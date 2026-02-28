export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Messenger</title>
  </head>

  <body style="
    margin:0;
    padding:0;
    background-color:#f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
    color:#333;
  ">

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px 0;">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" border="0" style="
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 4px 20px rgba(0,0,0,0.05);
          ">

            <!-- Header -->
            <tr>
              <td style="
                background:linear-gradient(135deg,#4facfe,#00f2fe);
                padding:30px;
                text-align:center;
              ">
                <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
                     alt="Messenger"
                     width="70"
                     style="display:block;margin:0 auto 15px auto;" />
                
                <h1 style="
                  color:#ffffff;
                  margin:0;
                  font-size:26px;
                  font-weight:600;
                ">
                  Welcome to Messenger
                </h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:35px 30px;">

                <p style="font-size:18px;margin:0 0 15px 0;">
                  Hi <strong>${name}</strong>,
                </p>

                <p style="margin:0 0 20px 0;color:#555;">
                  We're excited to have you onboard! Messenger helps you stay connected
                  with people who matter — instantly and securely.
                </p>

                <!-- Steps Box -->
                <div style="
                  background:#f8fafc;
                  border-radius:10px;
                  padding:20px;
                  margin:25px 0;
                  border-left:4px solid #4facfe;
                ">
                  <p style="margin:0 0 10px 0;font-weight:600;">
                    Get started in minutes:
                  </p>

                  <ul style="margin:0;padding-left:18px;color:#555;">
                    <li style="margin-bottom:8px;">Complete your profile</li>
                    <li style="margin-bottom:8px;">Add contacts</li>
                    <li style="margin-bottom:8px;">Start conversations</li>
                    <li>Share media and stay connected</li>
                  </ul>
                </div>

                <!-- CTA Button -->
                <div style="text-align:center;margin:30px 0;">
                  <a href="${clientURL}" 
                     style="
                      background:linear-gradient(135deg,#4facfe,#00f2fe);
                      color:#ffffff;
                      text-decoration:none;
                      padding:14px 32px;
                      border-radius:50px;
                      font-weight:600;
                      display:inline-block;
                      font-size:15px;
                     ">
                    Open Messenger
                  </a>
                </div>

                <p style="color:#555;margin:0 0 10px 0;">
                  If you have any questions, feel free to reply to this email —
                  we're always happy to help.
                </p>

                <p style="margin:25px 0 0 0;">
                  Best regards,<br/>
                  <strong>The Messenger Team</strong>
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="
                background:#f4f6f8;
                padding:20px;
                text-align:center;
                font-size:12px;
                color:#888;
              ">
                <p style="margin:0 0 8px 0;">
                  © 2025 Messenger. All rights reserved.
                </p>

                <p style="margin:0;">
                  <a href="#" style="color:#4facfe;text-decoration:none;margin:0 8px;">
                    Privacy Policy
                  </a>
                  |
                  <a href="#" style="color:#4facfe;text-decoration:none;margin:0 8px;">
                    Terms
                  </a>
                  |
                  <a href="#" style="color:#4facfe;text-decoration:none;margin:0 8px;">
                    Support
                  </a>
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}