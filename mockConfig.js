export const mockConfig = {
    appName: 'JDF POC1',
    appVersion: '0.0.1',
    description: 'This is a mock config for JDF POC1',
    initialRoute: 'home',
    routes: [
        'home',
        'listing1',
        'listing2',
        'form1',
        'form2'
    ],
    screens: [
        {
            type: 'base',
            route: 'home',
            title: 'Home',
            components: [
                {
                    type: 'text',
                    text: 'Welcome to JDF POC1',
                    style: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                        alignSelf: 'center',
                        padding: 10
                    }
                },
                {
                    type: 'text',
                    text: 'Json Declarative Framework',
                    style: {
                        fontSize: 12,
                        fontWeight: 'normal',
                        marginBottom: 10,
                        alignSelf: 'center',
                        padding: 10
                    }
                },
                {
                    type: 'button',
                    text: 'Go To Listing 1',
                    action: {
                        type: 'navigate',
                        route: 'listing1'
                    }
                },
                {
                    type: 'button',
                    text: 'Go To Listing 2',
                    action: {
                        type: 'navigate',
                        route: 'listing2'
                    }
                },
                {
                    type: 'button',
                    text: 'Loan Opeing Form',
                    action: {
                        type: 'navigate',
                        route: 'form1'
                    }
                },
                {
                    type: 'button',
                    text: 'Deposit Opeing Form',
                    action: {
                        type: 'navigate',
                        route: 'form2'
                    }
                }
            ]
        },
        {
            type: 'form',
            route: 'form1',
            title: 'Open Loan',
            initialState: {
                name: '',
                email: '',
                nic: '',
                phone: '',
                amount: '',
                terms: false
            },
            components: [
                {
                    type: 'text',
                    text: 'Open Loan',
                    style: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                        alignSelf: 'center',
                        padding: 10
                    }
                },
                {
                    type: 'input',
                    inputMode: 'text',
                    label: 'Name',
                    placeholder: 'Enter your name',
                    stateKey: 'name'
                },
                {
                    type: 'input',
                    inputMode: 'email',
                    label: 'Email',
                    placeholder: 'Enter your email',
                    stateKey: 'email'
                },
                {
                    type: 'input',
                    inputMode: 'text',
                    label: 'NIC',
                    placeholder: 'Enter your nic',
                    stateKey: 'nic'
                },
                {
                    type: 'input',
                    inputMode: 'numeric',
                    label: 'Phone',
                    placeholder: 'Enter your phone',
                    stateKey: 'phone'
                },
                {
                    type: 'input',
                    inputMode: 'numeric',
                    label: 'Amount',
                    placeholder: 'Enter your amount',
                    stateKey: 'amount'
                },
                {
                    type: 'checkbox',
                    label: 'I agree to the terms and conditions',
                    stateKey: 'terms'
                },
                {
                    type: 'button',
                    text: 'Submit',
                    action: {
                        type: 'formSubmit',
                        url: '/api/submit',
                        method: 'POST'
                    }
                },

            ]
        },
        {
            type: 'form',
            route: 'form2',
            title: 'Open Fixed Deposit',
            initialState: {
                name: '',
                email: '',
                nic: '',
                phone: '',
                amount: '',
                ageDeclartion: false,
                terms: false
            },
            components: [
                {
                    type: 'text',
                    text: 'Open Fixed Deposit',
                    style: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                        alignSelf: 'center',
                        padding: 10
                    }
                },
                {
                    type: 'input',
                    label: 'Name',
                    placeholder: 'Enter your name',
                    stateKey: 'name'
                },
                {
                    type: 'input',
                    label: 'Email',
                    placeholder: 'Enter your email',
                    stateKey: 'email'
                },
                {
                    type: 'checkbox',
                    label: 'I am of leagal age',
                    stateKey: 'ageDeclartion'
                },
                {
                    type: 'input',
                    label: 'NIC',
                    placeholder: 'Enter your nic',
                    stateKey: 'nic'
                },
                {
                    type: 'input',
                    label: 'Phone',
                    placeholder: 'Enter your phone',
                    stateKey: 'phone'
                },
                {
                    type: 'input',
                    label: 'Amount',
                    placeholder: 'Amount you want to deposit',
                    stateKey: 'amount'
                },
                {
                    type: 'checkbox',
                    label: 'I agree to the terms and conditions',
                    stateKey: 'terms'
                },
                {
                    type: 'button',
                    text: 'Submit',
                    action: {
                        type: 'formSubmit',
                        url: '/api/submit',
                        method: 'POST'
                    }
                },

            ]
        },
        {
            type: 'listing',
            route: 'listing1',
            title: 'Listing 1',
            initialState: {
                data: []
            },
            initAction: {
                apiUrl: 'https://jsonplaceholder.typicode.com/posts',
                method: 'GET'
            },
            components: [
                {
                    type: 'text',
                    text: 'Basic Listing 1',
                    style: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                        alignSelf: 'center',
                        padding: 10
                    }
                },
                {
                    type: 'list',
                    dataKey: 'data',
                    itemComponent: {
                        type: 'tile',
                        titleKey: 'title',
                        idKey: 'id',
                        bodyKey: 'body',
                        style: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            alignSelf: 'center',
                            padding: 10
                        }
                    },
                }
            ]
        },
        {
            type: 'listing',
            route: 'listing2',
            title: 'Listing 2',
            initialState: {
                data: []
            },
            initAction: {
                apiUrl: 'https://jsonplaceholder.typicode.com/todos',
                method: 'GET'
            },
            components: [
                {
                    type: 'text',
                    text: 'Basic Listing 1',
                    style: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                        alignSelf: 'center',
                        padding: 10
                    }
                },
                {
                    type: 'list',
                    dataKey: 'data',
                    itemComponent: {
                        type: 'tile',
                        titleKey: 'title',
                        idKey: 'id',
                        bodyKey: 'body',
                        style: {
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            alignSelf: 'center',
                            padding: 10
                        }
                    },
                }
            ]
        }
    ]
};