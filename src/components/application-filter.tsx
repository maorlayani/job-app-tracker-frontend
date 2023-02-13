import styled from "styled-components"
import { useAppSelector } from "../hooks/redux-hooks"
import { RootState } from "../store/store"
import { CustomSelectFilter } from "./custom-select-filter"
import { application, status } from '../interfaces/trakcer'
import { trackerService } from "../services/tracker.service"
import { useEffect, useState } from "react"
import { FilterButton } from "./filter-button"

interface ApplicationFilterProps {
    // onSetFilterBy: (ev: React.ChangeEvent<HTMLSelectElement>) => void
}

const StyledCustomSelectFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3em 0 1em;
`
interface Options {
    location: string[],
    position: string[]
}
export const ApplicationFilter: React.FC<ApplicationFilterProps> = () => {

    const [options, setOptions] = useState<Options>({ location: [], position: [] })

    useEffect(() => {
        getOptions()
    }, [])

    const getOptions = async () => {
        try {
            const applications: application[] =
                await trackerService.getApplications({ location: [], position: [], status: [] })
            const locationOpt = removeDuplicates(applications, 'location')
            const positionOpt = removeDuplicates(applications, 'position')
            setOptions({ location: locationOpt, position: positionOpt })
        } catch (err) {
            console.error('Cannot get filtered applications', err)
        }
    }

    const removeDuplicates = (array: application[], key: 'location' | 'position') => {
        let typeOpt = array.map(app => app[key])
        typeOpt = typeOpt.filter((val, idx, arr) => arr.indexOf(val) === idx)
        return typeOpt
    }

    const getAllAppStatus = () => {
        return [status.submitted, status.assignment, status.interview, status.contract, status.rejection]
    }


    return <StyledCustomSelectFilter>
        <FilterButton text='Location' opt={options.location} />
        <FilterButton text='Position' opt={options.position} />
        <FilterButton text='Status' opt={getAllAppStatus()} />
        {/* <CustomSelectFilter options={options.location} label='Location' onSetFilterBy={onSetFilterBy} /> */}
        {/* <CustomSelectFilter options={options.position} label='Position' onSetFilterBy={onSetFilterBy} /> */}
        {/* <CustomSelectFilter options={getAllAppStatus()} label='Status' onSetFilterBy={onSetFilterBy} /> */}
    </StyledCustomSelectFilter>
} 