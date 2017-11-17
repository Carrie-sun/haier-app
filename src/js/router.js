import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import head from '../components/my/head.vue'
import datum from '../components/datum/datum.vue'
import car from '../components/car/car.vue'
import order from '../components/order/order.vue'
import address from '../components/address/address.vue'
import all from '../components/all/all.vue'
import send from '../components/send/send.vue'
import take from '../components/take/take.vue'
import pay from '../components/pay/pay.vue'
import appraise from '../components/appraise/appraise.vue'
import add from '../components/add/add.vue'
import paying from '../components/paying/paying.vue'
import affirm from '../components/affirm/affirm.vue'

import footer from  '../components/index/footer.vue'
import classify from  '../components/classify/classify.vue'
import fridge from  '../components/fridge/fridge.vue'
import fridgedetail from  '../components/fridge/fridgedetail.vue'
import air from  '../components/fridge/air-conditioning-detail.vue'
import search from  '../components/search/search.vue'

//import footer  from  '../componentss/index/footer.vue'
import home from '../components/contents/home.vue'
import side from '../components/side/side.vue'
import start  from  '../components/start/startone.vue'
import login  from  '../components/login/login.vue'
import register  from  '../components/register/register.vue'
import find  from  '../components/find/find.vue'
import mall  from  '../components/mall/mall.vue'
import activity  from  '../components/activity/activity.vue'
import buyshow from '../components/buyshow/buyshow.vue'
import showdetail from '../components/showdetail/showdetail.vue'
//import upshow from '../components/upshow/upshow.vue'

export default new VueRouter({
	routes: [
		{
			path: '*',
			redirect: "/start"
		},
	    {
			path: '/find',
			component: find
		},
		{
			path: '/activity',
			component: activity
		},
		{
			path: '/mall',
			component: mall
		},
		{
			path: "/buyshow",
			component: buyshow
		},
		{
			path: "/buyshow",
			component: buyshow
		},
		{
			path: "/showdetail",
			component: showdetail
		},
		/*{
			path: "/upshow",
			component: upshow
		},*/
		{
			path: '/head',
			component: head
		},
		{
			path: '/datum',
			component: datum
		},
		{
			path: '/car',
			component: car
		},
		{
			path: '/order',
			component: order,
			children: [{
					path: '/send',
					component: send
				},
				{
					path: '/take',
					component: take
				},
				{
					path: '/pay',
					component: pay
				},
				{
					path: '/appraise',
					component: appraise
				},

			]
		},
		{
			path: '/address',
			component: address,
			children:[
			{path:'/add',
			component:add}
			]
		},
		{
			path: '/add',
			component: add
		},
		{
			path: '/paying',
			component: paying,
			name:'paying',
			children:[
			{
				path:'/affirm',
				component:affirm,
				name:'affirm'
			}
			]
		},
		{path:'/footer',component:footer},
		{path:'/classify',component:classify},
		{path:'/fridge',component:fridge},
		{path:'/fridgedetail',component:fridgedetail},
		{path:'/air-conditioning-detail',component:air},
		{path:'/search',component:search},
		{path:'/start',component:start},
		{path:'/footer',component:footer},
		{
			path:'/home',
			component:home,
			children:
			[
				{
					path:'/side',
					component:side
				}
			
			]
			
		},
		{path:'/login',component:login},
		{path:'/register',component:register}
	]
})