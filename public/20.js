webpackJsonp([20],{115:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{admins:[],admin_id:0}},created:function(){this.$nextTick(function(){this.initDataTable()}),this.refreshAdmin()},methods:{refreshAdmin:function(){var t=this;util.notify("Refreshing admin","loading"),axios.get(data.getBaseURL()+"api/v1/admin").then(function(e){$.notifyClose(),t.admins=e.data}).catch(function(t){util.notify("An error occured","error")})},initDataTable:function(){var t=this;$("#admin_table").DataTable({destroy:!0,aaData:t.data,autoWidth:!1,info:!1,searching:!1,dom:"Bfrtip",buttons:[{text:'<i class="fa fa-plus"></i> Add Admin',action:function(){t.$router.push("/admin/add")},className:"btn btn-success"}]}),this.addListener()},addListener:function(){var t=this;$("#admin_table_next").click(function(){t.addListener()}),$(".delete").click(function(){var e=$(this).attr("id");t.admin_id=e,util.showModal("#deleteAdminModal")})},deleteAdmin:function(){util.hideModal("#deleteAdminModal"),util.notify("Deleting admin","loading");var t=this;axios.delete(data.getBaseURL()+"api/v1/admin/"+this.admin_id).then(function(e){util.showResult(e)&&t.refreshAdmin()}).catch(function(t){util.showResult(t)})},getType:function(t){return'<span class="label label-'+(1==t?"success":"info")+'">'+(1==t?"admin":"co-admin")+"</span>"},isAdmin:function(t){return 1==t},deleteButton:function(t){return'<i class="fa fa-trash delete" id="'+t+'"></i>'}},watch:{admins:function(t){this.initDataTable()}},computed:{data:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this.admins,e=[];for(var n in t){var i=[];i.push('<img src="'+(data.getStorageURL()+t[n].admin_image)+'" class="thumbnail" heigh="60px" width="60px" alt="'+t[n].admin_name+'"/>'),i.push(t[n].admin_name),i.push(t[n].admin_user),i.push(this.getType(t[n].admin_type)),i.push(this.deleteButton(t[n].id)),e.push(i)}return e})}}},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-8 col-md-offset-2"},[t._m(0),t._v(" "),n("modal",{attrs:{id:"deleteAdminModal"}},[n("modal-header",[t._v("Delete Admin")]),t._v(" "),n("modal-body",[n("h1",[t._v("Are you sure to delete Admin?")])]),t._v(" "),n("modal-footer",[n("button",{staticClass:"btn btn-danger",on:{click:t.deleteAdmin}},[t._v("Delete Admin")]),t._v(" "),n("button",{staticClass:"btn btn-default",attrs:{onclick:"util.hideModal('#deleteAdminModal')"}},[t._v("Cancel")])])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-hover",attrs:{id:"admin_table"}},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Username")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Delete")])])]),t._v(" "),n("tbody")])])])])}]}},64:function(t,e,n){var i=n(0)(n(115),n(116),!1,null,null,null);t.exports=i.exports}});