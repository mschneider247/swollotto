export const buildNewUser = (authorizedUser) => {
    console.log('BUILD USER, new user name:: ', authorizedUser.displayName);
    console.log(' new user id:: ', authorizedUser.uid);

    let newUser = {
        id: authorizedUser.uid,
        fullName: authorizedUser.displayName,
        name: '',
        level: 1,
        agreedToTerms: false,
    }

    return newUser;
};