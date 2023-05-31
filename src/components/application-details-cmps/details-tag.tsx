import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { Application } from '../../models/interfaces'
import { updateApplication } from '../../store/reducers/tracker-slice'
import { utilService } from '../../services/util.service'
import { ApplicationKeys } from '../../models/enums'

export const StyledDetailsTag = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // padding: 1em;
    padding: .2em;
    gap: .5em;
    margin-block-end: 1em;

    textarea {
        line-height: 2;
        resize: vertical;
        min-height: 100px;
    }
`
export const TagTitle = styled.span`
    font-size: 1em;
    // min-width: 150px;
    color: #2c3a3a;
    font-weight: 600;
`
export const TagContent = styled.span`
    min-width: 100%;
    font-size: 1em;
    box-shadow: 0px 0px 3px 1px #d7d3d3;
    padding: .5em;
    border-radius: 3px;
    flex-grow: 1;
    font-size: 1em;
    color: #877993d2;
    overflow: hidden;
    text-overflow: ellipsis;
`
const TagInput = styled(TagContent)`
   
    border: none;
    outline-color: #ae84d1;
    font-family: inherit;

`

interface DetailsTagProps {
    title: string,
    content: string,
    name: ApplicationKeys,
    application: Application,
    isTextArea?: Boolean
    className?: string
}
export const DetailsTag: React.FC<DetailsTagProps> = ({ application, title, content, isTextArea, name, className, ...props }) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [inputTextValue, setInputTextValue] = useState(application[name])
    const [inputNumberValue, setInputNumberValue] = useState(0)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (inputTextValue === undefined) setInputTextValue(application[name])
        if (name === 'experience') {
            const numberPattern = /\d+/
            const matches = content.match(numberPattern)
            if (matches) setInputNumberValue(+matches)
        }
    }, [application[name]])

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode)
        // console.log('toggle');
    }
    const onHandleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        let value
        if (name === 'experience') {
            setInputNumberValue(+ev.target.value)
            value = +ev.target.value
        }
        else setInputTextValue(ev.target.value)
        value = ev.target.value
        const applicationToUpdate = { ...application, [name]: value }
        dispatch(updateApplication(applicationToUpdate))
    }
    // console.log('render');

    return (
        <StyledDetailsTag className={className} {...props}>
            <TagTitle>{title}</TagTitle>
            {!isEditMode && <TagContent onClick={toggleEditMode}>{name === 'experience' ? utilService.checkIsPlural(inputNumberValue, 'year') : inputTextValue}</TagContent>}
            {isEditMode && <TagInput as={isTextArea ? "textarea" : "input"}
                type={name === 'experience' ? 'number' : 'text'}
                name={name}
                value={name === 'experience' ? inputNumberValue : inputTextValue}
                // value={application[name]}
                onChange={onHandleChange}
                onBlur={toggleEditMode}
                autoFocus
            />}
        </StyledDetailsTag >
    )
}