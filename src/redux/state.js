import { rerender } from "../render";


let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount:"3"},
			{id: 2, message: "It's my first post", likesCount:"23"},
			{id: 3, message: "Blablabla", likesCount:"1"},
			{id: 4, message: "Hello, it's me", likesCount:"42"},
		],
		newPostText: '',
	},
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Sasha'},
			{id: 2, name: 'Lena'},
			{id: 3, name: 'Masha'},
			{id: 4, name: 'Eduardo'},
			{id: 5, name: 'Barbara'},
			{id: 6, name: 'Susie'},
		],
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Yo!'},
			{id: 4, message: 'Hello!'},
			{id: 5, message: 'Salut!'},
			{id: 6, message: 'Zdravstvuyte'},
		],
		newMessageText: '',
	},
	sidebar: {
		friends: [
			{id:1, name: 'Keanu', picPath: 'https://images.thestar.com/9E0OXPTu-XPtSbKk2HIUJPgK4O0=/1086x869/smart/filters:cb(1633563181414)/https://www.thestar.com/content/dam/thestar/entertainment/music/2021/10/06/keanu-reeves-among-2021-inductees-to-canadas-walk-of-fame/20211006191012-615e2d691164443e59995476jpeg.jpg'},
			{id:2, name: 'Eduardo', picPath: 'https://st2.depositphotos.com/1545689/10674/i/600/depositphotos_106749950-stock-photo-dog-in-hat-and-sunglasses.jpg'},
			{id:3, name: 'Lena', picPath: 'https://s1.1zoom.ru/big0/266/354971-svetik.jpg'}
		]
	}
	
}

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
	}
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerender(state);
}

export let updateNewPostText = (newText) => {
	
	state.profilePage.newPostText = newText;
	rerender(state);
}



export default state;