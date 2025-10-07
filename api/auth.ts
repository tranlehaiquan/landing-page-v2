import { POCKETBASE } from '.';

export const loggedin = () => POCKETBASE().authStore.isValid;
export const info = () => POCKETBASE().authStore.model;
export const logout = () => POCKETBASE().authStore.clear();

export const onAuthChange = (callback: (isValid: boolean) => void) => {
    const pb = POCKETBASE();
    const unsubscribe = pb.authStore.onChange((token, record) => {
        callback(pb.authStore.isValid);
    });
    return unsubscribe;
};

export const login = (
    provider: 'google' | 'facebook' | 'discord',
    redirectTo: (_: string) => void,
    ref?: string
) => {
    POCKETBASE()
        .collection('users')
        .authWithOAuth2({
            provider: provider,
            urlCallback: (url) => redirectTo(url)
        });
};
