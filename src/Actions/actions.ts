
type IncrementAction = {
  type: 'INCREMENT';
};


export const increment = (): IncrementAction => ({
  type: 'INCREMENT',
});
