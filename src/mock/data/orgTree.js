const orgTree = {
	data: [{
		label: '神谷农业云平台',
		id: 1,
		name: '神谷农业云平台',
		type: 0,
		children: [{
			label: '文山市荣发三七种植专业合作社',
			id: 2,
			name: '文山市荣发三七种植专业合作社',
			type: 1,
			children: [{
				label: '种植基地１',
				id: 3,
				name: '种植基地１',
				type: 2
			}, {
				label: '种植基地２',
				id: 4,
				name: '种植基地２',
				type: 2
			}]
		}, {
			label: '文山市荣发三七种植专业合作社2',
			id: 5,
			name: '文山市荣发三七种植专业合作社2',
			type: 1,
			children: [{
				label: '种植基地１-2',
				id: 6,
				name: '种植基地１-2',
				type: 2
			}, {
				label: '种植基地２-2',
				id: 7,
				name: '种植基地２-2',
				type: 2
			}]
		}]
	}],
	flag: 1,
	message: '查询组织机构树成功.'
}
export default orgTree
