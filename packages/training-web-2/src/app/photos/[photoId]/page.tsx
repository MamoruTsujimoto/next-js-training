'use client'

import Link from 'next/link'
import { LikeButton } from './LikeButton'
import styles from './page.module.css'
import { useRouter } from "next/navigation"

type Props = {
  params: { photoId: string }
}

export default function Page({ params }: Props) {
  const router = useRouter()

  return (
    <div>
      <h1>写真ID「{params.photoId}」の詳細画面</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>概要</th>
            <td>概要テキスト</td>
          </tr>
          <tr>
            <th>カテゴリー</th>
            <td>
              <Link href={`/categories/flower`}>花</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <LikeButton photoId={params.photoId} />
      <button
        onClick={() => {
          router.push('/')
        }}
      >トップに戻る</button>
    </div>
  )
}
