import classes from './link.module.scss';
import NextLink, { LinkProps } from "next/link";

// type Props = {
//   variant?: 'primary'|'secondary'|'simple'|'simple-alt';
//   simple?: boolean;
// } & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// : React.FC<Props>
export const Link = ({
  variant = 'primary',
  simple = false,
  href,
  as,
  // legacyBehavior,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...rest 
}) => {
  const classNames = [classes.link, classes[variant]].join(' ');
  
  return (
    <NextLink 
      href={href}
      as={as}
      legacyBehavior={true}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}>
      <a className={classNames} {...rest}>{children}</a>
    </NextLink>
  )
}