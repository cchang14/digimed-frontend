export class Constants {

    // public static AUTHORIZED_URLS = {
    //     "/home": "ROLE_ADMIN",
    //     "/mod": "ROLE_MODERATOR"
    // }

    public static AUTHORIZED_URLS = [
        {
            url: '/test',
            role: 'ROLE_ADMIN'
        },
        {
            url: '/mod',
            role: 'ROLE_MODERATOR'
        }
    ]

}