interface PathsType {
    path: string;
    label:{
        fr: string;
        de: string;
    }
    
    
}
const menuItems : PathsType[] =  [
    {
        path: 'offer',
        label: {fr: "Offre", de: "Angebot"},

    },
    {
        path: 'team',
        label: {fr: "Team", de: "Team"},
    
    },
    {
        path: 'contact',
        label: {fr: "Contact", de: "Kontakt"},
    },
]
export type {PathsType}
export {menuItems};