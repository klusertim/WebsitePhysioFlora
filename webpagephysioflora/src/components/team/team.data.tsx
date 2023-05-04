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
        path: "M243.119 36.9002C205.044 13.2242 179.212 -1.09374 134.409 0.0654381C84.4164 1.35887 44.3537 10.1886 17.5246 52.4526C-11.8567 98.7373 -1.74231 147.013 28.9678 192.425C55.7672 232.053 87.8185 246.449 134.409 254.635C180.999 262.82 243.119 293.925 266.823 284.102C290.527 274.28 349.378 205.522 346.926 164.594C344.473 123.666 297.67 70.8206 243.119 36.9002Z",
        color: "#ACC3F9"
    },
    {
        name: "Marlis Arn",
        description:{
            de: <>Sekretärin</>,
            fr: <>blablabla</>
        },
        image: "marlis",
        path: "M22.796 53.5294C55.3907 35.8252 149.689 -3.70025 203.2 0.279663C256.711 4.25958 290.351 35.1391 315.277 53.5294C340.202 71.9197 347 117.484 347 125.307C347 133.129 343.688 178.557 333.579 197.633C323.469 216.71 295.929 233.728 263.334 244.981C230.74 256.235 156.487 256.235 116.397 248.961C76.307 241.688 29.4194 223.435 13.5579 189.81C-2.30356 156.186 -9.79868 71.2335 22.796 53.5294Z",
        color: "#B797E5"
    },

]

export interface TeamDataType{
    name: String,
    description: {
        de: JSX.Element,
        fr: JSX.Element,
    },
    image: String,
    path: string,
    color: String
}