import Vue from 'vue'
// 请求挂在loading状态
export function extendFetchWidthLoading(fetch) {
  const ret = {  message: '', data: null, loading: false }
  const retObservable = Vue.observable(ret)
  retObservable.loading = true
  fetch
    .then((res) => {
      retObservable.data = res.data
      retObservable.loading = false
    })
    .catch((err) => {
      retObservable.message = err.message
      retObservable.loading = false
    })
  return retObservable
}