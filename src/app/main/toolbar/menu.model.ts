export class MainMenuModel
{
    public model: any[] = [
            {
                'id'       : 'home',
                'title'    : 'Home',
                'type'     : 'item',
                'icon'     : 'home',
                'url'      : '/main/home',
            },
            {
                'id'       : 'surveys',
                'title'    : 'Surveys',
                'type'     : 'item',
                'icon'     : 'library_books',
                'url'      : '/main/surveys',
            }, 
            {
                'id'       : 'users',
                'title'    : 'Users',
                'type'     : 'item',
                'icon'     : 'account_circle',
                'url'      : '/main/users',
            },            
            {
                'id'       : 'settings',
                'title'    : 'Settings',
                'type'     : 'item',
                'icon'     : 'settings',
                'url'      : '/main/settings',
            }                       
        ];

}

