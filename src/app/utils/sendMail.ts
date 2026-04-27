
export async function sendMail(name: string, email: string, message: string) {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        console.error("WEB3FORMS_ACCESS_KEY is missing in environment variables");
        return { success: false, message: "Server configuration error" };
    }

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: name,
                email: email,
                message: message,
                subject: `New Contact Form Submission from ${name}`,
                from_name: "Portfolio Contact Form",
            }),
        });

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const result = await response.json();
            if (result.success) {
                return { success: true, message: "Message sent successfully!" };
            } else {
                console.error("Web3Forms API Error:", result);
                return { success: false, message: result.message || "Failed to send message" };
            }
        } else {
            const errorText = await response.text();
            console.error("Non-JSON Response received:", errorText);
            return { 
                success: false, 
                message: `Server Error: ${errorText.substring(0, 50)}...` 
            };
        }

    } catch (error) {
        console.error("Fetch Error:", error);
        return { success: false, message: "Network error. Please try again." };
    }
}
