export function getAllCafes(){
    return CAFEDATA;
}

export function getCafeById(id){

    return CAFEDATA.find(item => item.id === id);    
}

// Cafe list data
export const CAFEDATA = [
    {
        id: '001',
        name: 'Liberté Cafe',
        keyImage:'https://images.unsplash.com/photo-1516743619420-154b70a65fea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80', 
        distance: '2.5 km', 
        tags: [
            {key:0, value:'Quiet'},
            {key:1, value:'Minimalist'},
        ],
        hours: '8am - 8pm',
        features: [
            {key:0, value:'Wifi'},
            {key:1, value:'Charging outlets'},
            {key:2, value:'Food options'},
            {key:3, value:'Untimed seating'},
            {key:4, value:'Transit access'}
        ],
        address: '248 West Broadway, Vancouver, BC'
    },
    {id: '002', name: 'Pallet Coffee', keyImage:'https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', distance: '3.7 km', tags: [{key:0, value:'Calm'}, {key:1, value:'Bright'}], hours: '7am - 5pm', features: [{key:0, value:'Wifi'}, {key:1, value:'Charging outlets'}, {key:2, value:'Food options'}, {key:3, value:'Untimed seating'}, {key:4, value:'Transit access'}], address: '1398 Kingsway, Vancouver, BC'},
    {id: '003', name: 'Cittadella', keyImage:'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', distance: '2.8 km', tags: [{key:0, value:'Aesthetic'}, {key:1, value:'Quaint'}], hours: '8am - 8pm', features: [{key:0, value:'Wifi'}, {key:1, value:'Charging outlets'}, {key:2, value:'Food options'}, {key:3, value:'Untimed seating'}, {key:4, value:'Transit access'}], address: '2310 Ash Street, Vancouver, BC'},
    {id: '004', name: 'Aperture', keyImage:'https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80', distance: '2.5 km', tags: [{key:0, value:'Cozy'}, {key:1, value:'Productive'}], hours: '8am - 10pm', features: [{key:0, value:'Wifi'}, {key:1, value:'Charging outlets'}, {key:2, value:'Food options'}, {key:3, value:'Untimed seating'}, {key:4, value:'Transit access'}], address: '243 West Broadway, Vancouver, BC'},
    {id: '005', name: 'Breka Bakery', keyImage:'https://images.unsplash.com/photo-1564327367919-cb377ea6a88f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', distance: '3.2 km', tags: [{key:0, value:'Lively'}, {key:1, value:'Pastries'}], hours: 'Open 24/7', address: '6533 Fraser Street, Vancouver, BC'},
    {id: '006', name: '49th Parallel', keyImage:'https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', distance: '4.0 km', tags: [{key:0, value:'Chill'}, {key:1, value:'Studious'}], hours: '7am - 6pm', features: [{key:0, value:'Wifi'}, {key:1, value:'Charging outlets'}, {key:2, value:'Food options'}, {key:3, value:'Untimed seating'}, {key:4, value:'Transit access'}], address: '2902 Main Street, Vancouver, BC'},
    {id: '007', name: 'Nemesis', keyImage:'https://images.unsplash.com/photo-1643944471768-2d2eac3afb6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80', distance: '1.8 km', tags: [{key:0, value:'Hip'}, {key:1, value:'Minimalist'}], hours: '8am - 4pm', features: [{key:0, value:'Wifi'}, {key:1, value:'Charging outlets'}, {key:2, value:'Food options'}, {key:3, value:'Untimed seating'}, {key:4, value:'Transit access'}], address: '555 Great Northern Way, Vancouver, BC'},
    {id: '008', name: 'Cafe Bono', keyImage:'https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80', distance: '1.2 km', tags: [{key:0, value:'Aesthetic'}, {key:1, value:'Chill'}], hours: '9am - 10pm', features: [{key:0, value:'Wifi'}, {key:1, value:'Charging outlets'}, {key:2, value:'Food options'}, {key:3, value:'Untimed seating'}, {key:4, value:'Transit access'}], address: '420-329 North Rd, Coquitlam, BC'},
    {id: '009', name: 'La Forêt', keyImage:'https://images.unsplash.com/photo-1581863389163-0da8e738580f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', distance: '1.8 km', tags: [{key:0, value:'Bright'}, {key:1, value:'Lively'}], hours: '8am - 10pm', features: [{key:0, value:'Wifi'}, {key:1, value:'Charging outlets'}, {key:2, value:'Food options'}, {key:3, value:'Untimed seating'}, {key:4, value:'Transit access'}], address: '6848 Jubilee Ave, Burnaby, BC'},
    {id: '010', name: 'Prado Cafe', keyImage:'https://images.unsplash.com/photo-1510877073473-6d4545e9c2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', distance: '2.7 km', tags: [{key:0, value:'Productive'}, {key:1, value:'Clean'}], hours: '7am - 6pm', features: [{key:0, value:'Wifi'}, {key:1, value:'Charging outlets'}, {key:2, value:'Food options'}, {key:3, value:'Untimed seating'}, {key:4, value:'Transit access'}], address: '4208 Fraser St, Vancouver, BC'}
];

