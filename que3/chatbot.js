function getBotResponse(message) {
  const userMsg = message.toLowerCase();

  if (userMsg.includes("reset password")) {
    return "To reset your password, go to the IT portal and click 'Forgot Password'.";
  } else if (userMsg.includes("wifi issue")) {
    return "Please try reconnecting to 'Campus_WiFi'. If the issue persists, contact IT support.";
  } else if (userMsg.includes("install software")) {
    return "Send an email to it-support@yourorg.com with the software name and your system ID.";
  } else if (userMsg.includes("hello") || userMsg.includes("hi")) {
    return "Hello! I’m your IT Helpdesk bot. How can I assist you today?";
  } else if (userMsg.includes("bye")) {
    return "Goodbye! Have a productive day!";
  } else {
    return "Sorry, I didn’t understand that. Please try asking about password, WiFi, or software help.";
  }
}

module.exports = { getBotResponse };