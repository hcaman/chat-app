import chatSlice, {
    addMsg,
    deleteMsg,
    updateMsg,
    getMsg,
} from '../redux/chatSlice';

describe('Chat Slice', () => {
    const initialState = {
        msgsChat: [],
    };
    const mockPreviousState = {
        msgsChat: [
            {
                id: '8c0ce19f-5ccb-47e2-8b7a-71824e2ac9d8',
                message: 'Hola, como estas ?',
                user: 'Jhon',
                addTime: 1667930809364,
                hourAndMinutes: '19:06',
            },
            {
                id: '8911ee21-7ef7-41e5-b757-54fd5f4295c6',
                message: 'Hola',
                user: 'Cleo',
                addTime: 1667930254652,
                hourAndMinutes: '18:57',
            },
        ],
    };
    it('2-should return the initial state', () => {
        expect(chatSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    it('3-should add message to empty state when addMsg is invoked', () => {
        const newMessage = {
            message: 'Send a msg test',
            user: 'anonymous',
        };

        const action = addMsg(newMessage);
        const reducer = chatSlice(initialState, action);

        expect(reducer.msgsChat.length).toBe(1);
        expect(reducer.msgsChat[0].message).toEqual(newMessage.message);
    });

    it('4-should add new message to existing messages list when addMsg is invoked', () => {
        const newMessage = {
            message: 'Bien, gracias!',
            user: 'Cleo',
        };

        const action = addMsg(newMessage);
        const reducer = chatSlice(mockPreviousState, action);

        expect(reducer.msgsChat.length).toBe(3);
        expect(reducer.msgsChat[0].message).toEqual(newMessage.message);
    });

    it('5-should delete message from list when deleteMsg is invoked', () => {
        const reducer = chatSlice(
            mockPreviousState,
            deleteMsg('8c0ce19f-5ccb-47e2-8b7a-71824e2ac9d8')
        );

        expect(reducer.msgsChat.length).toBe(1);
        expect(reducer.msgsChat[0].user).toEqual('Cleo');
    });
    it('6-should order message by time from list when getMsg is invoked', () => {
        const reducer = chatSlice(mockPreviousState, getMsg());

        expect(reducer.msgsChat.length).toBe(2);
        expect(reducer.msgsChat[0].addTime).toBeGreaterThan(
            reducer.msgsChat[1].addTime
        );
    });

    it('7-should update message from list when updateMsg is invoked', () => {
        const msgToModify = {
            message: 'You are the best!',
            id: '8c0ce19f-5ccb-47e2-8b7a-71824e2ac9d8',
        };
        const reducer = chatSlice(mockPreviousState, updateMsg(msgToModify));

        const msgModified = reducer.msgsChat.find(
            (msg) => msg.id === msgToModify.id
        );
        const msgBeforeModified = mockPreviousState.msgsChat.find(
            (msg) => msg.id === msgToModify.id
        );

        expect(reducer.msgsChat.length).toBe(2);
        expect(msgModified.message).not.toEqual(msgBeforeModified.message);
        expect(msgModified.message).toEqual(msgToModify.message);
    });
});
