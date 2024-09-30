import PercentageBar from '@/components/atoms/PercentageBar'
import { NormalText, TitleBasic } from '@/components/atoms/Texts'
import {ProgrammingLanguagesList} from '@/utils/ProgrammingLanguagesList'

const ProgrammingLanguages = () => {
  return (
    <div className='w-full'>
      <TitleBasic>Programming Languages</TitleBasic>
      <ul className='mt-3'>
        {
          ProgrammingLanguagesList.map((item, index) => (
            <li className='mb-3' key={index}>
              <div className='flex justify-between mb-2'>
                <NormalText>{item.language}</NormalText>
                <NormalText>{item.percentage}</NormalText>
              </div>
              <PercentageBar percentage={item.percentage} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProgrammingLanguages
