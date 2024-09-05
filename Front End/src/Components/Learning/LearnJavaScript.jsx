const person = {
    name    :'Nanda Hari Reddy',
    age     :23,
    address : {
                first_line : 'gurijala',
                last_line  : 'Kadapa'
                },
    profiles : ['Twitter', 'Instagram','Youtube', 'Facebook'],

    printProfile: () =>{person.profiles.map( profile => {console.log(profile)})}
}

export default function PersonDetails()
{
    return(<>
            <div>{person.name}</div>
            <div>{person.age}</div>
            <div>{person.address.first_line + ', ' +person.address.last_line}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}