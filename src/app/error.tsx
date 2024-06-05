'use client'
 
import style from "./error.module.css"
import { Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import { CloseCircleFilled } from '@ant-design/icons'
import { usePathname } from 'next/navigation'
import RoutedUserSearcher from '@/app/user/ui/components/UserSearcher/RoutedUserSearcher'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void,
}) {
  const pathname = usePathname();

  var str = pathname;
  var n = str.lastIndexOf('/');
  var result = str.substring(n + 1);

  const routePathResolver = (username: string) => {
    return `/wantlist/${username}`
  }

  return (
    <div className={style.error_page}>
      <Flex justify='center' align='center' vertical style={{height: '100vh'}}>
      <CloseCircleFilled style={{color: "#ff5555", fontSize: 50, paddingBottom: 20}} />
      <Title level={3} style={{color: "white", maxWidth: 340}}>{error.message}</Title>
        <div>
          <Text style={{color: "white"}}>You can try again with a different search</Text>
        </div>
        <div className={style.username_input}>
          <RoutedUserSearcher
            initialValue={result}
            routerPathBeforeUsername="/wantlist/"
          />
        </div>
      </Flex>
    </div>
  )
}