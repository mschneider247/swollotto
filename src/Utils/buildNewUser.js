import { moods } from '../Configs/moods';

export const buildNewUser = (authorizedUser, name) => {

    let contactInfo = {
        email: authorizedUser.email,
        phoneNumber: authorizedUser.phoneNumber,
        agreedToEmail: false,
        agreedToText: false,
    }

    let attributes = {
        vitamins: 0,
        dentalHygiene: 0,
        water: 0,
        fiber: 0,
    }

    let stats = {
        name: name,
        level: 1,
        exP: 0,
        attributes: attributes,
        inventory: [],
        achievements: [],
        quests: [],
        doneQuests: [],
        friends: [],
        blocked: [],
        mood: moods[0],
    }

    let newUser = {
        id: authorizedUser.uid,
        creationDate: authorizedUser.metadata.creationTime,
        subscribed: false,
        authType: authorizedUser.providerData[0].providerId,
        fullName: authorizedUser.displayName,
        contactInfo: contactInfo,
        agreedToTerms: true,
        stats: stats,
    }

    return newUser;
};