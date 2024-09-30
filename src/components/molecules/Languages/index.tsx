import PercentageBar from '@components/atoms/PercentageBar/index'
import { NormalText, TitleBasic } from "@components/atoms/Texts/index";
import {LanguagesList} from '@/utils/LanguagesList'

const Languages = () => {
  return (
    <div className='w-full'>
      <TitleBasic>Languages</TitleBasic>
      <ul className='mt-3'>
        {
          LanguagesList.map((item, index) => (
            <li className='mb-3' key={index}>
              <div className='flex justify-between mb-2'>
                <NormalText>{item.laguage}</NormalText>
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

export default Languages
