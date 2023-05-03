import { moods } from '../Configs/moods';

export const buildNewUser = (authorizedUser, name) => {

    let contactInfo = {
        email: authorizedUser.email,
        phoneNumber: authorizedUser.phoneNumber,
        agreedToEmail: false,
        agreedToText: false,
    }

    let traits = {
        stamina: 1,
        discipline: 1,
        strength: 1,
        coordination: 1,
        calm: 1,
        focus: 1,
        speed: 1,
        knowledge: 1,
        safety: 1,
        stress: 0,
    }

    let stats = {
        name: name,
        level: 1,
        exP: 0,
        traits: traits,
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