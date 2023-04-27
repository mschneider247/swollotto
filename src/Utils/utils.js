export const buildNewUser = (authorizedUser, name) => {

    let newUser = {
        id: authorizedUser.uid,
        fullName: authorizedUser.displayName,
        agreedToTerms: true,
        name: name,
        level: 1,
    }

    return newUser;
};