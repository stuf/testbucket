//# extendContext :: (StrMap Any, StrMap Any) ~> StrMap Any
const extendContext = (c1, c2) => {
  const k1 = new Set(Object.keys(c1));
  const k2 = new Set(Object.keys(c2));
  const overlap = new Set([...k1].filter(x => k2.has(x)));

  if (overlap.size > 0) {
    // We have duplicates, warn user as this may have implications
    console.warn('Trying to merge provided context to existing context' +
                 'but there seems to be a conflict. This is probably not' +
                 'intentional and may result in unspecified functionality.\n\n' +
                 `The overlapping properties are: ${Array.from(overlap).join(', ')}`);
  }

  return R.merge(c1, c2);
};

