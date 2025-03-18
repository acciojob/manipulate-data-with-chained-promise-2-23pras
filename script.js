//your JS code here. If required.
const output = document.getElementById('output');

const intialPromise = new Promise((res,rej)={
	setTimeout(()=>{
		res([1,2,3,4])
	},3000)
})

intialPromise.then((arr)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let evenNum = arr.filter(num=>num%2===0);
			output.textContent = evenNum.join(',');
			resolve(evenNum)
		},1000)
	})
	
}).then((evenNum)=>{
   return new Promise((resolve)=>{
	   setTimeout(()=>{
		   let mutNum = evenNum.map(num=>num*2);
		   output.textContent = mutNum.join(',');
		   resolve(mutNum);
	   },2000)
   })

	
}).catch((err)=>{
	console.log('Error : ',err)
})