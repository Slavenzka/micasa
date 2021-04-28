import React from 'react'
import css from './SocialReaction.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import IconLike from 'assets/icons/IconLike'
import { ButtonHeights, ButtonPalettes } from 'utils/const'
import IconDislike from 'assets/icons/IconDislike'
import IconComment from 'assets/icons/IconComment'

const SocialReaction  = ({
  data,
  className,
  handleClickLike,
  handleClickDislike,
  handleClickComment,
}) => {
  const {liked, disliked, comments} = data

  return (
    <ul className={classnames(css.list, className)}>
      <li className={css.item}>
        <Button
          className={css.button}
          onClick={handleClickLike}
          palette={ButtonPalettes.TEXT}
          height={ButtonHeights.CONTENT}
        >
          <IconLike className={classnames(css.icon, css.iconLike)} />
          { liked || '' }
        </Button>
      </li>
      <li className={css.item}>
        <Button
          className={css.button}
          onClick={handleClickDislike}
          palette={ButtonPalettes.TEXT}
          height={ButtonHeights.CONTENT}
        >
          <IconDislike className={classnames(css.icon, css.iconLike)} />
          { disliked || '' }
        </Button>
      </li>
      <li className={css.item}>
        <Button
          className={css.button}
          onClick={handleClickComment}
          palette={ButtonPalettes.TEXT}
          height={ButtonHeights.CONTENT}
        >
          <IconComment className={classnames(css.icon, css.iconLike)} />
          { comments || '' }
        </Button>
      </li>
    </ul>
  )
}

export default SocialReaction
