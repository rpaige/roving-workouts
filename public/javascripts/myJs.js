var Workout = function(type, exercises) {
	this.type = type;
	this.exercises = exercises;
};
 Workout.prototype.test = 'funny';

var exercises = function(name, description, visualDes) {
	this.name = name;
	this.description = description;
	this.visualDes = visualDes;
};
//chest exercises
var pushups = new exercises('pushups', 'Body in a straight line, feet together, arms shoulder width apart. Lower yourself to the floor till upper arms are parallel with the floor.', 'pushups visual description link here');
var cGPushups = new exercises('close-grip pushups', 'Body in a straight line, feet together, place hands close together. Lower yourself to the floor till upper arms are parallel with the floor', 'close grip pushups visual description link here');
var wGPushups = new exercises('wide-grip pushups', 'Body in a straight line, feet together, place hands wider than shoulder width apart. Lower yourself to the floor till upper arms are parallel width the floor', 'wide grip pushups visual description link here');
var sidePushups = new exercises('side pushups', 'Lying on your side, with your knees bent, floor side arm across your belly. Other arm in-line with pectorals. Perform a pushup, raising your boddy off of the ground.','side pushups visualDes link here');
var stagPushups = new exercises('staggered-arm pushups', 'Body in a straight line, feet together, place hands about shoulder width apart with one hand forward and one back. Alternate hands each repetition. Lower yourself to the floor till upper arms are parallel with the floor', 'staggered army pushupsvisual description link here');
var sLPushups = new exercises('single-leg pushups', 'Body in a straight line, one foot off the ground, alternated each repetition. Place hands shoulder width apart. Lower yourself to the ground till upper arms are parallel with the floor.', 'single leg pushups visual description link here');
//triceps exercises
var diamondPushups = new exercises('diamond pushups', 'Body in a straight line, make a diamond shape with index fingers and thumbs. Lower yourself to the floor till upper arms are parallel with floor. If it is too difficult, go to your knees.', 'visual description link here');
var dips = new exercises('dips', 'Arms about shoulder width apart, behind your back with feet extended in front of you. Bend arms at the elbows, concentrating on triceps.', 'visual description link here');
var triExtensions = new exercises('tricep extensions', 'Body in a straight line, facing the wall. Hands flat on the wall. Bring feet back till body is at a 45 degree angle. Bending at the elbow, extending arms to push body away from the wall.', 'visual description link here');
//back exercises
var RevSnowAngels = new exercises('reverse snow angels', 'Lying on the floor, with head facing downward, arms extended forward. Slowly bring hands backwards, towards the buttocks, keeping arms straight, and not touching the ground, to pinch the center of the back. Do not lift head off of the floor.', 'visual description link here');
var goodMornings = new exercises('good mornings', 'With feet about shoulder width apart, back straight, core tight, looking forward, bend, pushing your glutes back untill your back is parallel with the floor. Maintain a straight back, tight core, and always look forward.', 'visual description link here');
var supermans = new exercises('supermans', 'Lying on the floor, belly down, arms extended infront of you, legs straight, head forward. Lift legs and arms off the floor simultaneously, tightening the lower back.', 'visual description link here');
var bridge = new exercises('bridge', 'Lying back down, legs bent at the knees(as if you were doing situps), raise hips off the floor towards the sky, keeping shoulders planted on the ground.');
var pPlacePushups = new exercises('pike place pushups', 'Hands and feet on the floor, legs straight, back straight, create a V shape with your body(Bent, with buttocks in the air). Slight bend in the elbows. Bring head to the floor by bending elbows, while maintaining the V shape.', 'visual description link here');
var swimmer = new exercises('swimmer', 'Lying belly down, arms and legs straight, with arms extended infront of you, lift right arm and left leg a few inches off the ground while keeping them straight. Alternate hands and feet every repetition.', 'visual description link here');
//biceps exercises
var curls = new exercises('curls', 'Grab anything you can hold, stand up straight, palms forward, lift weight only by bending arm at the elow. If it is too difficult, grab something lighter.', 'visual description link here');
var rows = new exercises('rows', 'Body in a straight line, back towards the ground. Hang under something stable that can support your weight. Place hands more than shoulder width apart, pull yourself towards what you are hanging from.', 'visual description link here');
var pullups = new exercises('pullups', 'Hang from a bar or something stable where good grip can be acheived, with palms facing forward. Hands should be wider than shoulder width. Pull yourself up till chin has reached the bar.', 'visual description link here');
var chinups = new exercises('chinups', 'Much like the pullup, you will need to hang from a bar. This time palms facing backwards, and about shoulder width apart. Pull yourself up untill chin has passed the bar.', 'visual description link here');
//legs exercises
var airSquats = new exercises('air squats', 'Feet shoulder width apart, back straight, facing forward, arms crossed over chest. Weight should be on your heels. Bend your knees untill thighs are parallel with the floor. Weight should be on heels the whole time(You should be able to wiggle your toes throughout the entire exercise).', 'visual description link here');
var lunges = new exercises('lunges', 'While standing, take an exaggerated step forward, bringing the stationary knee to the ground. Do not let your front knee extend past your toes.', 'visual description link here');
var calfRaises = new exercises('calf raises', 'Feet together, hold something with some weight to it if you like. Bring your heels off the ground, pressing down with your toes and the balls of your feet.', 'visual description link here');
var boxJumps = new exercises('box jumps', 'Find a stable, elevated surface. With one motion, both feet at the same time, jump up to the surface, then stand up straight, step down to avoid injury.', 'visual description link here');
var donkeyKicks = new exercises('donkey kicks', 'Start on your hands and knees, with your back straight. Bring one leg at a time straight backwards and up(like a donkey kicks). Alternate legs every repetition.', 'visual description link here');
//abs exercises
var crunches = new exercises('crunches', 'Lying on your back, with hands loosely on the back of your head, feet off the ground with knees bent. Tighten your abs to bring your shoulders off the ground', 'visual description link here');
var obliqueCrunches = new exercises('oblique crunches', 'These are performed like regular crunches, but attempt to bring your right elbow to your left side, and right elbow to your left.', 'visual description link here');
var weightedSitups = new exercises('weighted situps', 'Grab something with some weight to it. Lying on your back, with knees bent and feet flat on the floor, use your abs to sit up straight. If it is too difficult, do it without weight', 'visual description link here');
var russianTwists = new exercises('russian twists', 'While sitting on the floor, knees bent, feet off the ground, slightly leaning back, hands together, twist from left and right touching the floor with hands on either side. Do not let your feet touch the ground.', 'visual description link here');
var legLifts = new exercises('leg lifts', 'Lying on your back, hands under your buttocks, legs straight and together, lift them to 90 degrees, then bring them back down to just above the ground, but not touching.', 'visual description link here');
var flutterKicks = new exercises('flutter kicks', 'Lying on your back, hands under your buttocks, bring legs up to 45 degrees and back down to just above the ground. Alternate legs as you would when you walk.', 'visual description link here');
var legClimbs = new exercises('leg climbs', 'Lying on your back, one leg bent at the knee, the other extended up towards the sky. Use your arms and abs to climb the extended leg, attempting to reach your foot.', 'visual description link here');
var dirtyDogs = new exercises('dirty dogs', 'Start on your hands and knees, back straight. Bring your right knee outward, keeping your knee bent. Repeat for left side.', 'visual description link here');
//shoulder exercises
var FeShoulderPushups = new exercises('feet-elevated shoulder pushups', 'Hands on the floor, feet elevated(bed works perfectly)legs straight, back straight, create a V shape with your body(Bent, with buttocks in the air). Slight bend in the elbows. Bring head to the floor by bending elbows, while maintaining the V shape.', 'visual description link here');
var crabWalk = new exercises('crab walk', 'From a seated position on the ground, lift buttocks up, use feet and hands to scurry across the floor.', 'visual description link here');
var wGpullups = new exercises('wide-grip pullups', 'The same as a regular pullups, with a extra wide hand placement.', 'visual description link here');
var hStandPushups = new exercises('hand-stand wall pushups', 'Start with hands on the floor, feet towards the wall. Walk your feet up the wall untill almost verticle, lower head to the floor by bending arms at the elbow.', 'visual description link here');
var oneArmPushups = new exercises('one-arm pushups', 'Hands shoulder width apart, legs wider than shoulder width apart for stability. Place one arm behind your back and perform a pushup.', 'visual description link here');
var shoulderPushups = new exercises('shoulder pushups', 'Hands and feet on the floor, legs straight, back straight, create a V shape with your body(Bent, with buttocks in the air). Slight bend in the elbows. Bring head to the floor by bending elbows, while maintaining the V shape.', 'visual description link here');
//forearms exercises
var chairUps = new exercises('chair-ups', 'Lying on your belly, arms extended out infront of you, grab hold of the legs of a chair. Use your forearms to lift the chair a few inches off the ground, lower it back down but do not touch it to the floor.', 'visual description link here');
var staticChairUps = new exercises('static chair-ups', 'Like the chair-up, but hold it in position, instead of repetitions.', 'visual description link here');
var twistedSChairUps = new exercises('twisted static chair-ups', 'Like the static chair-up, but use your forearms to move the chair in a small circles movement.', 'visual description link here');
var fingerHangs = new exercises('finger hangs', 'Hang from a bar, or something else stable. Use only your fingers. Remove and add fingers to work different muscles in the forearms.', 'visual description link here');
var fingerPushups = new exercises('finger pushups', 'Regular pushup position, spread fingers wide and use them to lift your body weight(go to knees if it is too difficult).', 'visual description link here');
var forearmCurls = new exercises('forearm curls', 'Grab something with some weight to it, bending your arm at the wrist, curl the weight.', 'visual description link here');
//cardio exercises
var burpees = new exercises('burpees', 'From a standing position, drop down to pushup position, perform a pushup, eplode up, performing a jump, extending arms above head and clap, land in a standing position.', 'visual description link here');
var walkouts = new exercises('walkouts', 'From a standing position, bring your hands to the floor and walk them out infront of you untill you are in pushup position, perform a pushup if you like, then walk them back till you are standing.', 'visual description link here');
var jumpingLunges = new exercises('jumping lunges', 'From standing position, jump, landing in a lunge. make sure you keep good form(do not let your front knee extend out past your toes).', 'visual description link here');

//workouts
var chestWorkout = new Workout('chest', [pushups.name,' ' + cGPushups.name,' ' + wGPushups.name,' ' + sidePushups.name,' ' + stagPushups.name,' ' + sLPushups.name]);
var tricepsWorkout = new Workout('triceps', [diamondPushups.name,' ' + dips.name,' ' + triExtensions.name]);
var backWorkout = new Workout('back', [RevSnowAngels.name,' ' + goodMornings.name,' ' + supermans.name,' ' + bridge.name,' ' + pPlacePushups.name,' ' + swimmer.name, ' ' + rows.name]);
var bicepsWorkout = new Workout('biceps', [curls.name,' ' + rows.name,' ' + pullups.name,' ' + chinups.name]);
var legsWorkout = new Workout('legs', [airSquats.name,' ' + lunges.name,' ' + calfRaises.name,' ' + boxJumps.name,' ' + donkeyKicks.name]);
var absWorkout = new Workout('abs', [crunches.name,' ' + obliqueCrunches.name,' ' + weightedSitups.name,' ' + russianTwists.name,' ' + legLifts.name,' ' + flutterKicks.name,' ' + legClimbs.name,' ' + dirtyDogs.name]);
var shouldersWorkout = new Workout('shoulders', [FeShoulderPushups.name,' ' + crabWalk.name,' ' + wGpullups.name,' ' + hStandPushups.name,' ' + oneArmPushups.name,' ' + shoulderPushups.name]);
var forearmsWorkout = new Workout('forearms', [chairUps.name,' ' + staticChairUps.name,' ' + twistedSChairUps.name,' ' + fingerHangs.name,' ' + fingerPushups.name,' ' + forearmCurls.name]);
var cardioWorkout = new Workout('cardio', [burpees.name, ' ' + walkouts.name, ' ' + jumpingLunges.name, ' ' + pushups.name, ' ' + weightedSitups.name, ' ' + pullups.name]);

	$(document).ready(function() {
		$('#bmiResult').hide();
	});
	$('#Calculate').on('click', function(e) {
		e.preventDefault();
		var newWeight = $('#weight').val() * 703;
		var newHeight = $('#height').val() * $('#height').val();
		// var heightSquared = (newHeight * newHeight);
		var BMI = Math.round(newWeight / newHeight);
		if (BMI <= 18.5) {
			$('#bmiResult').show().fadeIn('slow').text('You have a BMI of ' + BMI + '. You have an underweight status.');
		}
		if (BMI > 18.5 && BMI <= 24.9) {
			$('#bmiResult').show().fadeIn('slow').text('You have a BMI of ' + BMI + '. You have a normal weight status.');
		}
		if (BMI >=25 && BMI <= 29.9) {
			$('#bmiResult').show().fadeIn('slow').text('You have a BMI of ' + BMI + '. You have an overweight status.');
		}
		if (BMI >= 30) {
			$('#bmiResult').show().fadeIn('slow').text('You have a BMI of ' + BMI + '. You have an obese status.');
		}
	});
//**********************Chest page**********************
$(document).ready(function() {
	$('#chestDes').hide();('fast');
});

$(document).ready(function() {
	$('#Pushups').on('click', function() {
		$('#chestDes').slideToggle('slow', function() {
			$('#chestDes').text(pushups.description).finish();
			$('.visualDes').text(pushups.visualDes);
			$('#Pushups').mouseleave(function() {
				$('#chestDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#CgPushups').on('click', function() {
		$('#chestDes').slideToggle('slow', function() {
			$('#chestDes').text(cGPushups.description).finish();
			$('.visualDes').text(cGPushups.visualDes);
			$('#CgPushups').mouseleave(function() {
				$('#chestDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#WgPushups').on('click', function() {
		$('#chestDes').slideToggle('slow', function() {
			$('#chestDes').text(wGPushups.description).finish();
			$('.visualDes').text(wGPushups.visualDes);
			$('#WgPushups').mouseleave(function() {
				$('#chestDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#SidePu').on('click', function() {
		$('#chestDes').slideToggle('slow', function() {
			$('#chestDes').text(sidePushups.description).finish();
			$('.visualDes').text(sidePushups.visualDes);
			$('#SidePu').mouseleave(function() {
				$('#chestDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#StagPu').on('click', function() {
		$('#chestDes').slideToggle('slow', function() {
			$('#chestDes').text(stagPushups.description).finish();
			$('.visualDes').text(stagPushups.visualDes);
			$('#StagPu').mouseleave(function() {
				$('#chestDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#sLpushups').on('click', function() {
		$('#chestDes').slideToggle('slow', function() {
			$('#chestDes').text(sLPushups.description);
			$('.visualDes').text(sLpushups.visualDes);
			$('#sLpushups').mouseleave(function() {
				$('#chestDes').fadeOut('slow');
			});
		});
	});
});
//*********************Triceps page*********************
$(document).ready(function() {
	$('#triDes').hide();('fast');
});

$(document).ready(function() {
	$('#diamond').on('click', function() {
		$('#triDes').slideToggle('slow', function() {
			$('#triDes').text(diamondPushups.description).finish();
			$('.visualDes').text(diamondPushups.visualDes);
			$('#diamond').mouseleave(function() {
				$('#treDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#dips').on('click', function() {
		$('#triDes').slideToggle('slow', function() {
			$('#triDes').text(dips.description).finish();
			$('.visualDes').text(dips.visualDes);
			$('#dips').mouseleave(function() {
				$('#triDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#triEx').on('click', function() {
		$('#triDes').slideToggle('slow', function() {
			$('#triDes').text(triExtensions.description).finish();
			$('.visualDes').text(triExtensions.visualDes);
			$('#triEx').mouseleave(function() {
				$('#triDes').fadeOut('slow');
			});
		});
	});
});
//**********************Biceps page*********************
$(document).ready(function() {
	$('#biDes').hide();('fast');
});

$(document).ready(function() {
	$('#curls').on('click', function() {
		$('#biDes').slideToggle('slow', function() {
			$('#biDes').text(curls.description).finish();
			$('.visualDes').text(curls.visualDes);
			$('#curls').mouseleave(function() {
				$('#biDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#rows').on('click', function() {
		$('#biDes').slideToggle('slow', function() {
			$('#biDes').text(rows.description).finish();
			$('.visualDes').text(rows.visualDes);
			$('#rows').mouseleave(function() {
				$('#biDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#pullups').on('click', function() {
		$('#biDes').slideToggle('slow', function() {
			$('#biDes').text(pullups.description).finish();
			$('.visualDes').text(pullups.visualDes);
			$('#pullups').mouseleave(function() {
				$('#biDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#chinups').on('click', function() {
		$('#biDes').slideToggle('slow', function() {
			$('#biDes').text(chinups.description);
			$('.visualDes').text(chinups.visualDes);
			$('#chinups').mouseleave(function() {
				$('#biDes').fadeOut('slow');
			});
		});
	});
});
//***********************Abs page***********************

$(document).ready(function() {
	$('#absDes').hide();('fast');
});

$(document).ready(function() {
	$('#crunches').on('click', function() {
		$('#absDes').slideToggle('slow', function() {
			$('#absDes').text(crunches.description).finish();
			$('.visualDes').text(crunches.visualDes);
			$('#crunches').mouseleave(function() {
				$('#absDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#obCrunches').on('click', function() {
		$('#absDes').slideToggle('slow', function() {
			$('#absDes').text(obliqueCrunches.description).finish();
			$('.visualDes').text(obliqueCrunches.visualDes);
			$('#obCrunches').mouseleave(function() {
				$('#absDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#weightSu').on('click', function() {
		$('#absDes').slideToggle('slow', function() {
			$('#absDes').text(weightedSitups.description).finish();
			$('.visualDes').text(weightedSitups.visualDes);
			$('#weightSu').mouseleave(function() {
				$('#absDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#RussTwist').on('click', function() {
		$('#absDes').slideToggle('slow', function() {
			$('#absDes').text(russianTwists.description);
			$('.visualDes').text(russianTwists.visualDes);
			$('#RussTwist').mouseleave(function() {
				$('#absDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#legLifts').on('click', function() {
		$('#absDes').slideToggle('slow', function() {
			$('#absDes').text(legLifts.description).finish();
			$('.visualDes').text(legLifts.visualDes);
			$('#legLifts').mouseleave(function() {
				$('#absDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#fluttKick').on('click', function() {
		$('#absDes').slideToggle('slow', function() {
			$('#absDes').text(flutterKicks.description).finish();
			$('.visualDes').text(flutterKicks.visualDes);
			$('#fluttKick').mouseleave(function() {
				$('#absDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#legClimb').on('click', function() {
		$('#absDes').slideToggle('slow', function() {
			$('#absDes').text(legClimbs.description);
			$('.visualDes').text(legClimbs.visualDes);
			$('#legClimb').mouseleave(function() {
				$('#absDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#dirtyDog').on('click', function() {
		$('#absDes').slideToggle('slow', function() {
			$('#absDes').text(dirtyDogs.description);
			$('.visualDes').text(dirtyDogs.visualDes);
			$('#dirtyDog').mouseleave(function() {
				$('#absDes').fadeOut('slow');
			});
		});
	});
});
//**********************Back page***********************

$(document).ready(function() {
	$('#backDes').hide();('fast');
});

$(document).ready(function() {
	$('#RevSnowAngels').on('click', function() {
		$('#backDes').slideToggle('slow', function() {
			$('#backDes').text(RevSnowAngels.description).finish();
			$('.visualDes').text(RevSnowAngels.visualDes);
			$('#RevSnowAngels').mouseleave(function() {
				$('#backDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#goodMornings').on('click', function() {
		$('#backDes').slideToggle('slow', function() {
			$('#backDes').text(goodMornings.description).finish();
			$('.visualDes').text(goodMornings.visualDes);
			$('#goodMornings').mouseleave(function() {
				$('#backDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#supermans').on('click', function() {
		$('#backDes').slideToggle('slow', function() {
			$('#backDes').text(supermans.description).finish();
			$('.visualDes').text(supermans.visualDes);
			$('#supermans').mouseleave(function() {
				$('#backDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#dolphinKicks').on('click', function() {
		$('#backDes').slideToggle('slow', function() {
			$('#backDes').text(dolphinKicks.description);
			$('.visualDes').text(dolphinKicks.visualDes);
			$('#dolphinKicks').mouseleave(function() {
				$('#backDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#bridge').on('click', function() {
		$('#backDes').slideToggle('slow', function() {
			$('#backDes').text(bridge.description).finish();
			$('.visualDes').text(bridge.visualDes);
			$('#bridge').mouseleave(function() {
				$('#backDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#pPlacePushups').on('click', function() {
		$('#backDes').slideToggle('slow', function() {
			$('#backDes').text(pPlacePushups.description).finish();
			$('.visualDes').text(pPlacePushups.visualDes);
			$('#pPlacePushups').mouseleave(function() {
				$('#backDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#swimmer').on('click', function() {
		$('#backDes').slideToggle('slow', function() {
			$('#backDes').text(swimmer.description);
			$('.visualDes').text(swimmer.visualDes);
			$('#swimmer').mouseleave(function() {
				$('#backDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#rows').on('click', function() {
		$('#backDes').slideToggle('slow', function() {
			$('#backDes').text(rows.description);
			$('.visualDes').text(rows.visualDes);
			$('#rows').mouseleave(function() {
				$('#backDes').fadeOut('slow');
			});
		});
	});
});
//**********************Legs page***********************
$(document).ready(function() {
	$('#legDes').hide();('fast');
});

$(document).ready(function() {
	$('#airSquats').on('click', function() {
		$('#legDes').slideToggle('slow', function() {
			$('#legDes').text(airSquats.description).finish();
			$('.visualDes').text(airSquats.visualDes);
			$('#airSquats').mouseleave(function() {
				$('#legDes').fadeOut('slow').hide();
			});
		});
	});
});
$(document).ready(function() {
	$('#lunges').on('click', function() {
		$('#legDes').slideToggle('slow', function() {
			$('#legDes').text(lunges.description).finish();
			$('.visualDes').text(lunges.visualDes);
			$('#lunges').mouseleave(function() {
				$('#legDes').fadeOut('slow').hide();
			});
		});
	});
});
$(document).ready(function() {
	$('#calfRaises').on('click', function() {
		$('#legDes').slideToggle('slow', function() {
			$('#legDes').text(calfRaises.description).finish();
			$('.visualDes').text(calfRaises.visualDes);
			$('#calfRaises').mouseleave(function() {
				$('#legDes').fadeOut('slow').hide();
			});
		});
	});
});
$(document).ready(function() {
	$('#boxJumps').on('click', function() {
		$('#legDes').slideToggle('slow', function() {
			$('#legDes').text(boxJumps.description).finish();
			$('.visualDes').text(boxJumps.visualDes);
			$('#boxJumps').mouseleave(function() {
				$('#legDes').fadeOut('slow').hide();
			});
		});
	});
});
$(document).ready(function() {
	$('#donkeyKicks').on('click', function() {
		$('#legDes').slideToggle('slow', function() {
			$('#legDes').text(donkeyKicks.description).finish();
			$('.visualDes').text(donkeyKicks.visualDes);
			$('#donkeyKicks').mouseleave(function() {
				$('#legDes').fadeOut('slow').hide();
			});
		});
	});
});
//********************Forearms page*********************
$(document).ready(function() {
	$('#foreDes').hide();('fast');
});

$(document).ready(function() {
	$('#chairUps').on('click', function() {
		$('#foreDes').slideToggle('slow', function() {
			$('#foreDes').text(chairUps.description).finish();
			$('.visualDes').text(chairUps.visualDes);
			$('#chairUps').mouseleave(function() {
				$('#foreDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#staticChairups').on('click', function() {
		$('#foreDes').slideToggle('slow', function() {
			$('#foreDes').text(staticChairUps.description).finish();
			$('.visualDes').text(staticChairUps.visualDes);
			$('#staticChairups').mouseleave(function() {
				$('#foreDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#twistedSChairUps').on('click', function() {
		$('#foreDes').slideToggle('slow', function() {
			$('#foreDes').text(twistedSChairUps.description).finish();
			$('.visualDes').text(twistedSChairUps.visualDes);
			$('#twistedSChairUps').mouseleave(function() {
				$('#foreDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#fingerHangs').on('click', function() {
		$('#foreDes').slideToggle('slow', function() {
			$('#foreDes').text(fingerHangs.description).finish();
			$('.visualDes').text(fingerHangs.visualDes);
			$('#fingerHangs').mouseleave(function() {
				$('#foreDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#fingerPushups').on('click', function() {
		$('#foreDes').slideToggle('slow', function() {
			$('#foreDes').text(fingerPushups.description).finish();
			$('.visualDes').text(fingerPushups.visualDes);
			$('#fingerPushups').mouseleave(function() {
				$('#foreDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#forearmCurls').on('click', function() {
		$('#foreDes').slideToggle('slow', function() {
			$('#foreDes').text(forearmCurls.description).finish();
			$('.visualDes').text(forearmCurls.visualDes);
			$('#forearmCurls').mouseleave(function() {
				$('#foreDes').fadeOut('slow');
			});
		});
	});
});
//********************Shoulders page********************
$(document).ready(function() {
	$('#shoulDes').hide();('fast');
});

$(document).ready(function() {
	$('#FeShoulderPushups').on('click', function() {
		$('#shoulDes').slideToggle('slow', function() {
			$('#shoulDes').text(FeShoulderPushups.description).finish();
			$('.visualDes').text(FeShoulderPushups.visualDes);
			$('#FeShoulderPushups').mouseleave(function() {
				$('#shoulDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#crabWalk').on('click', function() {
		$('#shoulDes').slideToggle('slow', function() {
			$('#shoulDes').text(crabWalk.description).finish();
			$('.visualDes').text(crabWalk.visualDes);
			$('#crabWalk').mouseleave(function() {
				$('#shoulDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#wGpullups').on('click', function() {
		$('#shoulDes').slideToggle('slow', function() {
			$('#shoulDes').text(wGpullups.description).finish();
			$('.visualDes').text(wGpullups.visualDes);
			$('#wGpullups').mouseleave(function() {
				$('#shoulDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#hStandPushups').on('click', function() {
		$('#shoulDes').slideToggle('slow', function() {
			$('#shoulDes').text(hStandPushups.description).finish();
			$('.visualDes').text(hStandPushups.visualDes);
			$('#hStandPushups').mouseleave(function() {
				$('#shoulDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#oneArmPushups').on('click', function() {
		$('#shoulDes').slideToggle('slow', function() {
			$('#shoulDes').text(oneArmPushups.description).finish();
			$('.visualDes').text(oneArmPushups.visualDes);
			$('#oneArmPushups').mouseleave(function() {
				$('#shoulDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#shoulderPushups').on('click', function() {
		$('#shoulDes').slideToggle('slow', function() {
			$('#shoulDes').text(shoulderPushups.description).finish();
			$('.visualDes').text(shoulderPushups.visualDes);
			$('#shoulderPushups').mouseleave(function() {
				$('#shoulDes').fadeOut('slow');
			});
		});
	});
});
//**********************cardio page*********************

$(document).ready(function() {
	$('#cardioDes').hide();('fast');
});

$(document).ready(function() {
	$('#Burpees').on('click', function() {
		$('#cardioDes').slideToggle('slow', function() {
			$('#cardioDes').text(burpees.description).finish();
			$('.visualDes').text(burpees.visualDes);
			$('#Burpees').mouseleave(function() {
				$('#cardioDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#Walkouts').on('click', function() {
		$('#cardioDes').slideToggle('slow', function() {
			$('#cardioDes').text(walkouts.description).finish();
			$('.visualDes').text(walkouts.visualDes);
			$('#Walkouts').mouseleave(function() {
				$('#cardioDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#Jumping').on('click', function() {
		$('#cardioDes').slideToggle('slow', function() {
			$('#cardioDes').text(jumpingLunges.description).finish();
			$('.visualDes').text(jumpingLunges.visualDes);
			$('#Jumping').mouseleave(function() {
				$('#cardioDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#Pushups').on('click', function() {
		$('#cardioDes').slideToggle('slow', function() {
			$('#cardioDes').text(pushups.description).finish();
			$('.visualDes').text(pushups.visualDes);
			$('#Pushups').mouseleave(function() {
				$('#cardioDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#weightSu').on('click', function() {
		$('#cardioDes').slideToggle('slow', function() {
			$('#cardioDes').text(weightedSitups.description).finish();
			$('.visualDes').text(weightedSitups.visualDes);
			$('#weightSu').mouseleave(function() {
				$('#cardioDes').fadeOut('slow');
			});
		});
	});
});
$(document).ready(function() {
	$('#Pullups').on('click', function() {
		$('#cardioDes').slideToggle('slow', function() {
			$('#cardioDes').text(pullups.description).finish();
			$('.visualDes').text(pullups.visualDes);
			$('#Pullups').mouseleave(function() {
				$('#cardioDes').fadeOut('slow');
			});
		});
	});
});
//********************stopwatch*************************
	var time = 0;
	var running = 0;


	function startPause() {
		if(running == 0) {
		   running = 1;
		   increment();
		   document.getElementById('startPause').innerHTML = 'Pause';
		} else {
			running = 0;
			document.getElementById('startPause').innerHTML = 'Resume';
		}
	}

	function reset() {
		running = 0;
		time = 0;
		document.getElementById('startPause').innerHTML = 'Start';
		document.getElementById('output').innerHTML = '00:00:00';
	}

	function increment()
	 {
		if(running == 1) {
			setTimeout(function() {
				time++;
				var mins = Math.floor(time/10/60);
				var secs = Math.floor(time/10 % 60);
				var hours = Math.floor(time/10/60/60);
				var tenths = time % 10;

				if(mins < 10) {
					mins = '0' + mins;
				}
				if(secs < 10) {
					secs = '0' + secs;
				}
				document.getElementById('output').innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths + '0';
				increment();
			}, 100)
		}
	}

//**************************Users******************************