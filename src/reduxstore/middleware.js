export function loggingMiddleware(store) {
  return function (next) {
    return function (action) {
      console.log('middleware');
      next(action);
    };
  };
}
