/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
	  // 设置 CORS 头，允许从你的 React 应用域名访问
	  const headers = {
		'Access-Control-Allow-Origin': '*', // 生产环境中应该设置为你的 React 应用的域名
		'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Content-Type': 'application/json'
	  };
	  
	  // 处理 OPTIONS 请求（预检请求）
	  if (request.method === 'OPTIONS') {
		return new Response(null, { headers });
	  }
	  
	  // 创建一个简单的 API 响应
	  const data = {
		message: 'Hello LaoLai!',
		timestamp: new Date().toISOString()
	  };
	  
	  // 返回 JSON 响应
	  return new Response(JSON.stringify(data), { headers });
	}
  };
