// src/data/seedChats.js
const seedChats = [
  {
    id: "c14",
    name: "WorkElate - Backend",
    lastMessage: "API contract updated; please align frontend by EOD.",
    time: "10:05",
    messages: [
      { sender: "Lead", text: "We changed /v2/users response to include `role` and `isActive`.", time: "09:45" },
      { sender: "Frontend", text: "Noted — will update mapping in services and tests.", time: "09:52" },
      { sender: "Lead", text: "Also add role-based UI flags for admin flows.", time: "10:05" }
    ]
  },
  {
    id: "c13",
    name: "WorkElate - DevOps",
    lastMessage: "Deployment failed due to DB migrations; investigating.",
    time: "Yesterday",
    messages: [
      { sender: "DevOps", text: "Deployment failed: migration 20250901_create_jobs.", time: "Yesterday 22:10" },
      { sender: "Backend", text: "Rolling back to previous release and reproducing locally.", time: "Yesterday 22:25" },
      { sender: "QA", text: "Notify when staging is green.", time: "Yesterday 23:00" }
    ]
  },
  {
    id: "c12",
    name: "WorkElate - Product",
    lastMessage: "Please freeze features for v1.2 by Friday.",
    time: "Mon",
    messages: [
      { sender: "PM", text: "Please prioritize search improvements and export feature for v1.2.", time: "Mon 11:00" },
      { sender: "Designer", text: "Updated mocks uploaded to Figma; check the header spacing.", time: "Mon 11:15" },
      { sender: "PM", text: "Let's freeze features for v1.2 by Friday.", time: "Mon 17:20" }
    ]
  },
  {
    id: "c11",
    name: "Client: Acme Logistics",
    lastMessage: "Please share ETA for integration and webhooks.",
    time: "Mon",
    messages: [
      { sender: "Client", text: "Any update on webhook integration ETA?", time: "Mon 09:12" },
      { sender: "You", text: "Targeting next Wednesday; will share a detailed plan and test payloads.", time: "Mon 09:30" }
    ]
  },
  {
    id: "c10",
    name: "Design Review",
    lastMessage: "Header spacing looks off on small screens.",
    time: "Sun",
    messages: [
      { sender: "Designer", text: "Header spacing looks off on small screens and mobile nav overlaps.", time: "Sun 15:00" },
      { sender: "Frontend", text: "Working on responsive CSS fixes and breakpoints.", time: "Sun 16:10" }
    ]
  },
  {
    id: "c09",
    name: "QA Tickets",
    lastMessage: "Found race condition in job scheduler when multiple jobs enqueue.",
    time: "Sat",
    messages: [
      { sender: "QA", text: "Found race condition when two jobs enqueue simultaneously on worker cluster.", time: "Sat 10:20" },
      { sender: "Backend", text: "I'll add a mutex around enqueue and add tests.", time: "Sat 12:05" }
    ]
  },
  {
    id: "c08",
    name: "Hiring Panel",
    lastMessage: "Round 2 interviews scheduled next week.",
    time: "Fri",
    messages: [
      { sender: "HR", text: "Round 2 interviews scheduled next week; please shortlist top 6.", time: "Fri 08:00" },
      { sender: "You", text: "I'll prepare technical notes and sample project demo.", time: "Fri 08:10" }
    ]
  },
  {
    id: "c07",
    name: "SRE Alerts",
    lastMessage: "CPU spike observed on worker-3; investigating.",
    time: "Thu",
    messages: [
      { sender: "SRE", text: "CPU spike observed on worker-3 at 02:30 UTC; investigating cause.", time: "Thu 02:35" },
      { sender: "Backend", text: "Restarted instance and watching metrics; scaling rule will be updated.", time: "Thu 02:40" }
    ]
  },
  {
    id: "c06",
    name: "Integrations",
    lastMessage: "Webhook signature verified and fix pushed.",
    time: "Wed",
    messages: [
      { sender: "Partner", text: "Webhook signature failing for payload X on our side.", time: "Wed 13:00" },
      { sender: "You", text: "Verifying signature logic; identified missing timestamp - pushing fix.", time: "Wed 13:15" },
      { sender: "Partner", text: "Verified; working now. Thanks!", time: "Wed 13:40" }
    ]
  },
  {
    id: "c05",
    name: "General",
    lastMessage: "Team standup at 10:30 today.",
    time: "Today",
    messages: [
      { sender: "You", text: "Quick sync: standup at 10:30 today in room A.", time: "08:45" },
      { sender: "Asha", text: "I'll present the search prototype and demo queries.", time: "08:46" }
    ]
  },
  {
    id: "c04",
    name: "Analytics",
    lastMessage: "Search CTR dropped after last release; tracking funnels.",
    time: "Today",
    messages: [
      { sender: "Data", text: "Search CTR dropped 12% after last release; investigating query logs.", time: "07:20" },
      { sender: "You", text: "I'll run A/B to compare results and rollback if required.", time: "07:45" }
    ]
  },
  {
    id: "c03",
    name: "Payments",
    lastMessage: "Payment gateway test cards failing in sandbox.",
    time: "Tue",
    messages: [
      { sender: "Payments", text: "Test cards failing with 401 in sandbox environment.", time: "Tue 14:00" },
      { sender: "Backend", text: "Checking key rotation and auth headers.", time: "Tue 14:20" }
    ]
  },
  {
    id: "c02",
    name: "Support",
    lastMessage: "Customer reported missing emails; investigating SMTP logs.",
    time: "Mon",
    messages: [
      { sender: "Support", text: "Customer reports missing verification emails for some users.", time: "Mon 09:00" },
      { sender: "You", text: "Checking SMTP logs and retry queues.", time: "Mon 09:30" }
    ]
  },
  {
    id: "c01",
    name: "Feature Requests",
    lastMessage: "Please add CSV export for bookings.",
    time: "Sun",
    messages: [
      { sender: "PM", text: "Multiple clients asked for CSV export for bookings.", time: "Sun 10:00" },
      { sender: "You", text: "I'll design endpoint and add export job to scheduler.", time: "Sun 11:12" }
    ]
  }
];

export default seedChats;
