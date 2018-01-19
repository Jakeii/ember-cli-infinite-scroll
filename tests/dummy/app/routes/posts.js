import Route from '@ember/routing/route';
import InfiniteScrollRouteMixin from 'ember-cli-infinite-scroll/mixins/infinite-scroll-route';

export default Route.extend(InfiniteScrollRouteMixin, {
  limit: 4,

  model() {
    return this.infiniteQuery('post', {group_ids: '54c0452c8a5f04ef080001c1'});
  }
});
