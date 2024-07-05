import { Typography } from "@mui/material"
import { ReactSearchAutocomplete } from "react-search-autocomplete"

function Main () {
    const items = [
        {
            id: 0,
            name: 'Final Fantasy'
        }
    ]
    return (
        <div>
            <Typography variant='h1' sx={{
                 textAlign: "center"
            }}>Dash Pass</Typography>
            <ReactSearchAutocomplete items={items}/>
        </div>
    )
}

export default Main