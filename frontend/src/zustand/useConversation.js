import { create } from "zustand";
// Zustand and React Context are both tools used for state management in React applications,
// Zustand is a state management library for React applications that helps developers manage and share state across components more efficiently and with less boilerplate than some other state management solutions.

// This will return an object 
export const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));