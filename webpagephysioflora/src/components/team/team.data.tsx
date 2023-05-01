export default [
    {
        name: "Susanne Schneiter-Marti",
        description:{
            de: <>
                Beckenbodenrehabilitation für Frauen und Männer
                <br/>
                Narbenbehandlung
                <br/>
                Atemphysiotherapie
                <br/>
                Manuelle Lymphdrainage und Bandagen
                </>,
            fr: <>blablabla</>
        },
        image: "susanne",
    },
    {
        name: "Marlis Arn",
        description:{
            de: <>Sekretärin</>,
            fr: <>blablabla</>
        },
        image: "marlis",
    },

]

export interface TeamDataType{
    name: String,
    description: {
        de: JSX.Element,
        fr: JSX.Element,
    },
    image: String
}