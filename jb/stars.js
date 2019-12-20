	// 新增的浏览器动画函数
	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame
	})();

	export class Stars {
		constructor(el) {
			this.el = document.getElementById(el);
			this.c = this.el.getContext("2d");

			this.numStars = 1900; //星星的个数
			this.radius = '0.' + Math.floor(Math.random() * 9) + 1; //用于设置透明度
			this.focalLength = this.el.width * 2; //设置一个常数，是canvas宽度的2倍
			this.warp = 0;
			this.centerX;
			this.centerY;

			this.stars = []; // 初始化一组星星
			this.star; // 当前运动的星星
			//this.animate = true; // 是否运动

			this.initializeStars();
		}

		// 执行方法 
		initializeStars() {
			this.centerX = this.el.width / 2;
			this.centerY = this.el.height / 2;
			this.stars = [];
			for(var i = 0; i < this.numStars; i++) {
				this.star = {
					x: Math.random() * this.el.width,
					y: Math.random() * this.el.height,
					z: Math.random() * this.el.width, // 星星的运动的轨迹   
					o: '0.' + Math.floor(Math.random() * 99) + 1 // 1.0 ~ 1.99, 设置圆角
				};
				this.stars.push(this.star);
			}
		}

		// 运动方法
		moveStars() {
			// 星星的运动的轨迹， 每次运动不在原来的位置
			for(var i = 0; i < this.numStars; i++) {
				this.star = this.stars[i];
				this.star.z--;

				// 运动的临界值
				if(this.star.z <= 0) {
					this.star.z = this.el.width;
				}
			}

		}

		drawStars() {
			var pixelX, pixelY, pixelRadius;
			// 处理获取canvas宽高的兼容问题，浏览器兼容问题
			if(this.el.width !== window.innerWidth || this.el.height !== window.innerHeight) {
				this.el.width = window.innerWidth;
				this.el.height = window.innerHeight;
				this.initializeStars();
			}

			// 绘画canvas背景颜色和形状
			if(this.warp == 0) {
				//c.fillStyle = "rgba(17,168,246,1)";
				this.c.fillStyle = "rgba(0,0,0,1)"; // 背景设置
				this.c.fillRect(0, 0, this.el.width, this.el.height);
			}

			// 设置星星的透明度
			this.c.fillStyle = "rgba(209, 255, 255, " + this.radius + ")";

			for(var i = 0; i < this.numStars; i++) {
				this.star = this.stars[i];

				pixelX = (this.star.x - this.centerX) * (this.focalLength / this.star.z);
				pixelX += this.centerX;
				pixelY = (this.star.y - this.centerY) * (this.focalLength / this.star.z);
				pixelY += this.centerY;
				pixelRadius = 1 * (this.focalLength / this.star.z);

				// 绘制正方形星星
				this.c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
				this.c.fillStyle = "rgba(209, 255, 255, " + this.star.o + ")"; // 设置每一个的透明度
				//c.fill();
			}
		}

		// 执行入口
		executeFrame() {
			let that = this;

			// 为了使用回调，添加一个一个匿名函数
			(function a() {
				if(true) requestAnimFrame(a);
				that.moveStars();
				that.drawStars();
			})();
		}

	}
	

  


