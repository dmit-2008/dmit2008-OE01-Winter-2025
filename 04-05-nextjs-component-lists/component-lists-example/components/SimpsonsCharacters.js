const SIMPSON_CHARACTERS = [
    "Homer Simpson",
    "Bart Simpson",
    "Marge Simpson",
    "Mr. Burns",
    "Lisa Simpson",
    "Apu Nahasapeemapetilon",
    "Sideshow Bob",
    "Milhouse Van Houten",
    "Ned Flanders",
]


export default function SimpsonsCharacters() {
    return <ul>
        {SIMPSON_CHARACTERS.map((character) => {
            return <li>{character}</li>
        })}
    </ul>
}
