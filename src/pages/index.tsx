import { HomePage } from '@layouts/index'

import { listBanners, listPropertiesFiltered } from '@/services'
import { IHomeProps } from './types'

export async function getServerSideProps() {
  const [propertiesList, bannersList] = await Promise.all([
    listPropertiesFiltered(''),
    listBanners()
  ])

  const options = propertiesList?.data?.search?.options
  const selectedOptions = propertiesList?.data?.search?.values_selected

  return {
    props: {
      slideData: { banners: bannersList?.data || [] },
      filterOptionsInitial: { options, selectedOptions },
    },
  }
}

export default function Home({
  children,
  slideData,
  filterOptionsInitial,
}: IHomeProps) {
  console.log('DEBUG Home page slideData:', slideData)
  console.log('DEBUG Home filterOptionsInitial:', filterOptionsInitial)

  return (
    <HomePage slideData={slideData} filterOptionsInitial={filterOptionsInitial}>
      {children}
    </HomePage>
  )
}
