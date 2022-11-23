import userSlice, { loginUser, getUsers } from '../redux/userSlice';

describe('Users Slice', () => {
    const initialState = {
        isLoggedIn: false,
        userLogged: '',
        usersOnline: [],
    };

    const mockPreviousState = {
        isLoggedIn: false,
        userLogged: '',
        usersOnline: [
            {
                id: '5f45df62-bfb7-4c6f-b49c-428bbfdb320b',
                userName: 'John Doe',
                isOnline: false,
            },
            {
                id: '5f45df62-bfb7-4c6f-b49c-428bbfdb320a',
                userName: 'Cleo',
                isOnline: true,
            },
        ],
    };

    it('8-should return the initial state', () => {
        expect(userSlice(undefined, { type: undefined })).toEqual(initialState);
    });

    it('9-should add user to empty state when loginUser is invoked', () => {
        const newUser = 'John Doe';

        const action = loginUser(newUser);
        const reducer = userSlice(initialState, action);

        expect(reducer.usersOnline[0].userName).toEqual(newUser);
        expect(reducer.userLogged).toEqual(newUser);
        expect(reducer.usersOnline.length).toBe(1);
    });

    it('10-should change the state of isOnline to true if an user already exist when loginUser is invoked', () => {
        const newUser = 'John Doe';

        const action = loginUser(newUser);
        const reducer = userSlice(mockPreviousState, action);

        const userFromState = reducer.usersOnline.find(
            (u) => u.userName === newUser
        );
        expect(userFromState.id).toEqual(
            mockPreviousState.usersOnline.find((u) => u.userName === newUser).id
        );
        expect(userFromState.isOnline).toEqual(true);
        expect(reducer.usersOnline.length).toBe(2);
    });

    it('11-should show users with isOnline true from list when getUsers is invoked', () => {
        const reducer = userSlice(mockPreviousState, getUsers());

        expect(reducer.usersOnline[0].userName).toEqual('Cleo');
        expect(reducer.usersOnline.length).toBe(1);
    });
});
