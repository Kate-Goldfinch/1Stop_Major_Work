import React, {useState, useEffect} from 'react'
import ProductItem from './ProductItem';

const SearchBar = () =>{

    const [term, setTerm] = useState('')
    const[debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    useEffect(()=>{
        
       const timeoutId = setTimeout(()=>{
            setDebouncedTerm(term)
        },500);
        return () =>{
            clearTimeout(timeoutId)
        }
    }, [term]);

    // useEffect(() => {
    //     const search = () => {
    //         if (debouncedTerm) {
    //           apiService
    //             .searchUsers({ searchTerm: debouncedTerm, searchAll })
    //             .then((response) => {
    //               if (response.status === "success") {
    //                 const existingUsersNames = existingUsers.map(
    //                   ({ username }) => username
    //                 );
    //                 let filteredUsers = response.users.filter(
    //                   (u) =>
    //                     !existingUsersNames.includes(u.username) &&
    //                     u.username !== user.username
    //                 );
    //                 setUsers(filteredUsers);
    //               }
    //             });
    //         } else {
    //           setUsers([]);
    //         }
    //       };
    //       search();
    //     }, [debouncedTerm]);

    const renderedResults = results.map((result)=>{
        return <ProductItem product = {result}/>
    })

    return (
        <div>
            <div> 
                <div>
                    <label>Search products</label>
                    <input 
                        className='input'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>

            </div>
            <div>
                {renderedResults}
            </div>
        </div>
    )
}

export default SearchBar