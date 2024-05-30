function ticketStatus(tickets, ticketId) {
  let ticketsArray = Object.entries(tickets);
  let res = "";

  ticketsArray.forEach((ticket) => {
    if (ticket[0] === ticketId && ticket[1] === null) {
      res = "not sold";
    }
    if (ticket[0] === ticketId && ticket[1] !== null) {
      res = `sold to ${ticket[1]}`;
    }
    if (!res) {
      res = "unknown ticket id";
    }
  });
  return res;
}

const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

console.log(ticketStatus(tickets, "RE90VAW7"));
// => 'unknown ticket id'

console.log(ticketStatus(tickets, "0H2AZ123"));
// => 'not sold'

console.log(ticketStatus(tickets, "23LA9T41"));
// => 'sold to Verena Nardi'
