import classes from './contributors.module.scss';

export function ContributorsSkeleton() {
  return (
    <div className={classes.contributor}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}