export const fakeChats = [
	{
		id: 1,
		name: "Mark",
		lastMessage: "I don´t know who you are...",
		unreadMessages: 3,
		date: "3:44 pm",
	},
	{
		id: 2,
		name: "Hidegram",
		lastMessage: "Hidegram web was updated",
		unreadMessages: 1,
		date: "3:44 pm",
	},
	{
		id: 3,
		name: "Alice",
		lastMessage: "Why?",
		unreadMessages: 19,
		date: "3:44 pm",
	},
	{
		id: 4,
		name: "Saved Messages",
		lastMessage: "image.jpeg",
		unreadMessages: 3,
		date: "Mon",
	},
	{
		id: 5,
		name: "Mark",
		lastMessage: "I don´t know who you are...",
		unreadMessages: 3,
		date: "3:44 pm",
	},
	{
		id: 6,
		name: "Hidegram",
		lastMessage: "Hidegram web was updated",
		unreadMessages: 1,
		date: "3:44 pm",
	},
	{
		id: 7,
		name: "Alice",
		lastMessage: "Why?",
		unreadMessages: 19,
		date: "3:44 pm",
	},
	{
		id: 8,
		name: "Saved Messages",
		lastMessage: "image.jpeg",
		unreadMessages: 3,
		date: "Mon",
	},
	{
		id: 9,
		name: "Mark",
		lastMessage: "I don´t know who you are...",
		unreadMessages: 3,
		date: "3:44 pm",
	},
	{
		id: 10,
		name: "Hidegram",
		lastMessage: "Hidegram web was updated",
		unreadMessages: 1,
		date: "3:44 pm",
	},
	{
		id: 11,
		name: "Alice",
		lastMessage: "Why?",
		unreadMessages: 19,
		date: "3:44 pm",
	},
	{
		id: 12,
		name: "Saved Messages",
		lastMessage: "image.jpeg",
		unreadMessages: 3,
		date: "Mon",
	},
];

export const fakeMessages = [
	{
		id: "1",
		content: {
			text: "Hey, how's it going?",
		},
		sender: { id: "user1", name: "Alice" },
		timestamp: "2022-03-15T12:30:00Z",
		status: "sent",
		isRead: true,
	},
	{
		id: "2",
		content: {
			text: "Hi Alice! I'm doing well, thanks. How about you?",
		},
		sender: { id: "user2", name: "Bob" },
		timestamp: "2022-03-15T12:35:00Z",
		status: "delivered",
		isRead: false,
	},
	{
		id: "3",
		content: {
			text: "I'm good too. Any exciting plans for the day?",
		},
		sender: { id: "user1", name: "Alice" },
		timestamp: "2022-03-15T12:40:00Z",
		status: "read",
		isRead: true,
	},
	{
		id: "4",
		content: {
			text: "Not really, just work and some errands. How about you?",
		},
		sender: { id: "user2", name: "Bob" },
		timestamp: "2022-03-15T12:45:00Z",
		status: "sent",
		isRead: false,
	},
	{
		id: "5",
		content: {
			text: "Same here. It's a regular day. By the way, did you watch the latest movie?",
		},

		sender: { id: "user1", name: "Alice" },
		timestamp: "2022-03-15T12:50:00Z",
		status: "delivered",
		isRead: true,
	},
	{
		id: "6",
		content: {
			text: "No, not yet. How was it?",
		},
		sender: { id: "user2", name: "Bob" },
		timestamp: "2022-03-15T12:55:00Z",
		status: "sent",
		isRead: false,
	},
	{
		id: "7",
		content: {
			text: "It was fantastic! You should definitely check it out.",
		},
		sender: { id: "user1", name: "Alice" },
		timestamp: "2022-03-15T13:00:00Z",
		status: "read",
		isRead: true,
	},
	{
		id: "8",
		content: {
			text: "I'll make sure to watch it this weekend. Thanks for the recommendation!",
		},

		sender: { id: "user2", name: "Bob" },
		timestamp: "2022-03-15T13:05:00Z",
		status: "sent",
		isRead: false,
	},
	{
		id: "9",
		content: {
			text: "You're welcome! Let me know what you think. Anything else new with you?",
		},

		sender: { id: "user1", name: "Alice" },
		timestamp: "2022-03-15T13:10:00Z",
		status: "delivered",
		isRead: true,
	},
	{
		id: "10",
		content: {
			text: "Not much. Just the usual routine. How about you?",
		},
		sender: { id: "user2", name: "Bob" },
		timestamp: "2022-03-15T13:15:00Z",
		status: "read",
		isRead: false,
	},
	{
		id: "11",
		content: {
			text: "Just busy with work and some personal projects. Time flies!",
		},
		sender: { id: "user1", name: "Alice" },
		timestamp: "2022-03-15T13:20:00Z",
		status: "sent",
		isRead: true,
	},
	{
		id: "12",
		content: {
			text: "Tell me about it! Anyway, let's catch up soon. Have a great day!",
		},

		sender: { id: "user2", name: "Bob" },
		timestamp: "2022-03-15T13:25:00Z",
		status: "delivered",
		isRead: false,
	},
	{
		id: "13",
		content: {
			text: "Sure thing! You too, Bob. Take care!",
		},
		sender: { id: "user1", name: "Alice" },
		timestamp: "2022-03-15T13:30:00Z",
		status: "read",
		isRead: true,
	},
	{
		id: "14",
		content: {
			text: "Bye for now!",
			file: {
				type: "image",
				url: "/horizontal.png",
			},
		},
		sender: { id: "user2", name: "Bob" },
		timestamp: "2022-03-15T13:35:00Z",
		status: "sent",
		isRead: false,
	},
	{
		id: "15",
		content: {
			text: "Goodbye, Alice!",
		},
		sender: { id: "user1", name: "Alice" },
		timestamp: "2022-03-15T13:40:00Z",
		status: "delivered",
		isRead: true,
	},
].reverse();

export const myData = [
	{ title: "J Black", id: String(Math.random()).slice(8) },
	{ title: "Wife 2", id: String(Math.random()).slice(8) },
	{ title: "Note 12", id: String(Math.random()).slice(8) },
	{ title: "Margus", id: String(Math.random()).slice(8) },
	{ title: "Ketamin pro", id: String(Math.random()).slice(8) },
	{ title: "Wife", id: String(Math.random()).slice(8) },
	{ title: "Kitten", id: String(Math.random()).slice(8) },
	{ title: "Warum nicht", id: String(Math.random()).slice(8) },
	{ title: "Wife 2", id: String(Math.random()).slice(8) },
];
