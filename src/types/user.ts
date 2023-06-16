export default interface IUser {
    id: number,
    name : string
    phone : string
    email : string
    username : string
    website : string
    address : IAddress
    company : ICompany
}
  
interface IAddress {
    city : string
    geo : { lat : string, lng : string }
    street : string
    suite : string
    zipcode : string

}

interface ICompany {
    bs : string
    catchPhrase : string
    name : string
}