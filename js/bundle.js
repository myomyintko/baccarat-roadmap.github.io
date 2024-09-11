"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Main.ts
  var { regClass, property } = Laya;
  var Main = class extends Laya.Script {
    carouselContainer;
    items;
    numRows;
    numCols;
    panel;
    videoNode;
    // onEnable(): void {
    //     const HSlider = this.owner.getChildByName("HSlider") as Laya.HSlider
    //     const SOUND_URL = "resources/Take_a_Break.wav"
    //     Laya.SoundManager.useAudioMusic = true
    //     Laya.SoundManager.autoReleaseSound = true
    //     Laya.SoundManager.playMusic(SOUND_URL, 0)
    //     HSlider.on(Laya.Event.CHANGE, () => {
    //         const volume = HSlider.value / 100;
    //         Laya.SoundManager.setMusicVolume(volume)
    //     })
    // }
  };
  Main = __decorateClass([
    regClass("3UzpODcyRqacwGfMZnunyA")
  ], Main);

  // src/bac_roadmap/BacRoadmapV2.generated.ts
  var BacRoadmapV2Base = class extends Laya.Box {
    bead_plate_road_box;
    bead_plate_road_panel;
    bead_plate_road_sprite;
    big_road_box;
    big_road_panel;
    big_road_sprite;
    three_road_box;
    big_eye_road_box;
    big_eye_road_panel;
    big_eye_road_sprite;
    small_road_box;
    small_road_panel;
    small_road_sprite;
    cockroach_road_box;
    cockroach_road_panel;
    cockroach_road_sprite;
    wenlu_Zhuang;
    wenlu_Xian;
    switchBtn;
    resultBox;
    resultLbl;
    playerPairBtn;
    playerBtn;
    tieBtn;
    bankerBtn;
    bankerPairBtn;
    playerBonusBtn;
    super6Btn;
    bankerBonusBtn;
    playerNaturalBtn;
    bankerNaturalBtn;
    smallBtn;
    bigBtn;
    cancelBtn;
    confirmBtn;
    clearBtn;
  };

  // src/bac_roadmap/BacRoadmapV2.ts
  var { regClass: regClass2 } = Laya;
  var BaccaratResult = /* @__PURE__ */ ((BaccaratResult2) => {
    BaccaratResult2[BaccaratResult2["Banker"] = 1] = "Banker";
    BaccaratResult2[BaccaratResult2["Player"] = 2] = "Player";
    BaccaratResult2[BaccaratResult2["Tie"] = 4] = "Tie";
    BaccaratResult2[BaccaratResult2["BankerPair"] = 8] = "BankerPair";
    BaccaratResult2[BaccaratResult2["PlayerPair"] = 16] = "PlayerPair";
    BaccaratResult2[BaccaratResult2["Big"] = 32] = "Big";
    BaccaratResult2[BaccaratResult2["Small"] = 64] = "Small";
    BaccaratResult2[BaccaratResult2["BankerNatural"] = 128] = "BankerNatural";
    BaccaratResult2[BaccaratResult2["PlayerNatural"] = 256] = "PlayerNatural";
    BaccaratResult2[BaccaratResult2["SuperSix"] = 512] = "SuperSix";
    BaccaratResult2[BaccaratResult2["AnyPair"] = 1024] = "AnyPair";
    BaccaratResult2[BaccaratResult2["PerfectPair"] = 2048] = "PerfectPair";
    BaccaratResult2[BaccaratResult2["BankerDragonBonus"] = 4096] = "BankerDragonBonus";
    BaccaratResult2[BaccaratResult2["PlayerDragonBonus"] = 8192] = "PlayerDragonBonus";
    return BaccaratResult2;
  })(BaccaratResult || {});
  var bacResultBreadPlateImgData = {
    // banker
    [1 /* Banker */]: "resources/game_icons/type61.png",
    [1 /* Banker */ + 8 /* BankerPair */]: "resources/game_icons/type62.png",
    [1 /* Banker */ + 16 /* PlayerPair */]: "resources/game_icons/type63.png",
    [1 /* Banker */ + 8 /* BankerPair */ + 16 /* PlayerPair */]: "resources/game_icons/type64.png",
    // player
    [2 /* Player */]: "resources/game_icons/type65.png",
    [2 /* Player */ + 8 /* BankerPair */]: "resources/game_icons/type66.png",
    [2 /* Player */ + 16 /* PlayerPair */]: "resources/game_icons/type67.png",
    [2 /* Player */ + 8 /* BankerPair */ + 16 /* PlayerPair */]: "resources/game_icons/type68.png",
    // tie
    [4 /* Tie */]: "resources/game_icons/type69.png",
    [4 /* Tie */ + 8 /* BankerPair */]: "resources/game_icons/type70.png",
    [4 /* Tie */ + 16 /* PlayerPair */]: "resources/game_icons/type71.png",
    [4 /* Tie */ + 8 /* BankerPair */ + 16 /* PlayerPair */]: "resources/game_icons/type72.png"
  };
  var bacResultBigRoadmImgData = {
    // banker
    [1 /* Banker */]: "resources/game_icons/type01.png",
    [1 /* Banker */ + 8 /* BankerPair */]: "resources/game_icons/type02.png",
    [1 /* Banker */ + 16 /* PlayerPair */]: "resources/game_icons/type03.png",
    [1 /* Banker */ + 8 /* BankerPair */ + 16 /* PlayerPair */]: "resources/game_icons/type04.png",
    [1 /* Banker */ + 4 /* Tie */]: "resources/game_icons/type05.png",
    [1 /* Banker */ + 4 /* Tie */ + 8 /* BankerPair */]: "resources/game_icons/type06.png",
    [1 /* Banker */ + 4 /* Tie */ + 16 /* PlayerPair */]: "resources/game_icons/type07.png",
    [1 /* Banker */ + 4 /* Tie */ + 8 /* BankerPair */ + 16 /* PlayerPair */]: "resources/game_icons/type08.png",
    // player
    [2 /* Player */]: "resources/game_icons/type09.png",
    [2 /* Player */ + 8 /* BankerPair */]: "resources/game_icons/type10.png",
    [2 /* Player */ + 16 /* PlayerPair */]: "resources/game_icons/type11.png",
    [2 /* Player */ + 8 /* BankerPair */ + 16 /* PlayerPair */]: "resources/game_icons/type12.png",
    [2 /* Player */ + 4 /* Tie */]: "resources/game_icons/type13.png",
    [2 /* Player */ + 4 /* Tie */ + 8 /* BankerPair */]: "resources/game_icons/type14.png",
    [2 /* Player */ + 4 /* Tie */ + 16 /* PlayerPair */]: "resources/game_icons/type15.png",
    [2 /* Player */ + 4 /* Tie */ + 8 /* BankerPair */ + 16 /* PlayerPair */]: "resources/game_icons/type16.png"
  };
  var bacResultBigEyeBoyImgData = {
    1: "resources/game_icons/type85.png",
    2: "resources/game_icons/type86.png"
  };
  var bacResultSmallRoadImgData = {
    1: "resources/game_icons/type81.png",
    2: "resources/game_icons/type82.png"
  };
  var bacResultCockroachPigImgData = {
    1: "resources/game_icons/type83.png",
    2: "resources/game_icons/type84.png"
  };
  var BacRoadmapV2 = class extends BacRoadmapV2Base {
    roadmap;
    roadmapRows = 6;
    breadPlateCols = 8;
    bigRoadCols = 20;
    bigEyeRoadCols = 40;
    smallRoadCols = 20;
    cockroachRoadCols = 20;
    isResetting = false;
    onEnable() {
      Laya.loader.load("resources/game_icons.atlas").then((res) => {
        this.roadmap = new Roadmap([
          41,
          65,
          74,
          65,
          34,
          65,
          33,
          66,
          33,
          66,
          74,
          36,
          66,
          34,
          65
        ]);
        this.setupControls();
        this.setupRoadmapUI();
        this.SetHistoryData();
      });
    }
    setupControls() {
      this.resultLbl.text = "";
      let resultNumber = 0;
      let tempArray = [];
      const buttons = {
        player: this.playerBtn,
        banker: this.bankerBtn,
        tie: this.tieBtn,
        playerPair: this.playerPairBtn,
        bankerPair: this.bankerPairBtn,
        playerBonus: this.playerBonusBtn,
        super6: this.super6Btn,
        bankerBonus: this.bankerBonusBtn,
        playerNatural: this.playerNaturalBtn,
        big: this.bigBtn,
        small: this.smallBtn,
        bankerNatural: this.bankerNaturalBtn
      };
      const betTypeGroups = {
        [2 /* Player */]: [buttons.player, buttons.banker, buttons.tie, buttons.super6],
        [1 /* Banker */]: [buttons.banker, buttons.player, buttons.tie],
        [4 /* Tie */]: [buttons.tie, buttons.player, buttons.banker, buttons.super6],
        [16 /* PlayerPair */]: [buttons.playerPair],
        [8 /* BankerPair */]: [buttons.bankerPair],
        [8192 /* PlayerDragonBonus */]: [buttons.playerBonus, buttons.bankerBonus],
        [4096 /* BankerDragonBonus */]: [buttons.bankerBonus, buttons.playerBonus],
        [32 /* Big */]: [buttons.big, buttons.small],
        [64 /* Small */]: [buttons.small, buttons.big],
        [256 /* PlayerNatural */]: [buttons.playerNatural],
        [128 /* BankerNatural */]: [buttons.bankerNatural],
        [512 /* SuperSix */]: [buttons.super6, buttons.player]
      };
      const disableButtons = (selectedBetType) => {
        const buttonsToDisable = betTypeGroups[selectedBetType] || [];
        buttonsToDisable.forEach((button) => {
          button.disabled = true;
        });
      };
      const betBtnHandler = (betType) => {
        return new Laya.Handler(this, () => {
          disableButtons(betType);
          const betTypeName = BaccaratResult[betType];
          this.resultLbl.text += " " + betTypeName;
          resultNumber |= betType;
        });
      };
      this.playerPairBtn.clickHandler = betBtnHandler(16 /* PlayerPair */);
      this.playerBtn.clickHandler = betBtnHandler(2 /* Player */);
      this.tieBtn.clickHandler = betBtnHandler(4 /* Tie */);
      this.bankerBtn.clickHandler = betBtnHandler(1 /* Banker */);
      this.bankerPairBtn.clickHandler = betBtnHandler(8 /* BankerPair */);
      this.playerBonusBtn.clickHandler = betBtnHandler(8192 /* PlayerDragonBonus */);
      this.super6Btn.clickHandler = betBtnHandler(512 /* SuperSix */);
      this.bankerBonusBtn.clickHandler = betBtnHandler(4096 /* BankerDragonBonus */);
      this.playerNaturalBtn.clickHandler = betBtnHandler(256 /* PlayerNatural */);
      this.bigBtn.clickHandler = betBtnHandler(32 /* Big */);
      this.smallBtn.clickHandler = betBtnHandler(64 /* Small */);
      this.bankerNaturalBtn.clickHandler = betBtnHandler(128 /* BankerNatural */);
      const reset = () => {
        resultNumber = 0;
        this.resultLbl.text = "";
        Object.values(buttons).forEach((button) => {
          button.disabled = false;
        });
      };
      this.cancelBtn.clickHandler = new Laya.Handler(this, () => {
        reset();
      });
      this.confirmBtn.clickHandler = new Laya.Handler(this, () => {
        tempArray.push(resultNumber);
        this.roadmap.AddResult(resultNumber);
        console.log(this.roadmap);
        this.SetHistoryData();
        reset();
      });
      this.clearBtn.clickHandler = new Laya.Handler(this, () => {
        reset();
        this.Reset();
        this.roadmap.Reset();
      });
    }
    setupRoadmapUI() {
      this.bead_plate_road_panel.scrollType = Laya.ScrollType.Horizontal;
      this.bead_plate_road_panel.elasticEnabled = true;
      this.bead_plate_road_panel.mouseEnabled = true;
      const { width: beadPlateRoadWidth, height: beadPlateRoadHeight } = this.bead_plate_road_panel;
      this.bead_plate_road_sprite.size(beadPlateRoadWidth, beadPlateRoadHeight);
      this.setupControl(this.bead_plate_road_panel, this.roadmapRows, this.breadPlateCols);
      this.big_road_panel.scrollType = Laya.ScrollType.Horizontal;
      this.big_road_panel.elasticEnabled = true;
      this.big_road_panel.mouseEnabled = true;
      const { width: bigRoadWidth, height: bigRoadHeight } = this.big_road_panel;
      this.bead_plate_road_sprite.size(bigRoadWidth, bigRoadHeight);
      this.setupControl(this.big_road_panel, this.roadmapRows, this.bigRoadCols);
      this.big_eye_road_panel.scrollType = Laya.ScrollType.Horizontal;
      this.big_eye_road_panel.elasticEnabled = true;
      this.big_eye_road_panel.mouseEnabled = true;
      const { width: bigEyeRoadWidth, height: bigEyeRoadHeight } = this.big_eye_road_panel;
      this.bead_plate_road_sprite.size(bigEyeRoadWidth, bigEyeRoadHeight);
      this.setupControl(this.big_eye_road_panel, this.roadmapRows, this.bigEyeRoadCols);
      this.small_road_panel.scrollType = Laya.ScrollType.Horizontal;
      this.small_road_panel.elasticEnabled = true;
      this.small_road_panel.mouseEnabled = true;
      const { width: smallRoadWidth, height: smallRoadHeight } = this.small_road_panel;
      this.bead_plate_road_sprite.size(smallRoadWidth, smallRoadHeight);
      this.setupControl(this.small_road_panel, this.roadmapRows, this.smallRoadCols);
      this.cockroach_road_panel.scrollType = Laya.ScrollType.Horizontal;
      this.cockroach_road_panel.elasticEnabled = true;
      this.cockroach_road_panel.mouseEnabled = true;
      const { width: cockroachRoadWidth, height: cockroachRoadHeight } = this.cockroach_road_panel;
      this.bead_plate_road_sprite.size(cockroachRoadWidth, cockroachRoadHeight);
      this.setupControl(this.cockroach_road_panel, this.roadmapRows, this.cockroachRoadCols);
    }
    setupControl(roadmapPanel, rows, cols) {
      const roadmapBox = roadmapPanel.parent;
      const { width, height } = roadmapPanel;
      const controlWrapper = new Laya.Box(true);
      controlWrapper.size(width, height);
      controlWrapper.name = "control-container";
      const createControlButton = (iconPath) => {
        const icon = new Laya.Image(iconPath);
        icon.alpha = 0.3;
        icon.centerX = 0;
        icon.centerY = 0;
        icon.color = "#000000";
        const container = new Laya.Box(true);
        container.width = roadmapBox.width / 2;
        container.height = roadmapBox.height;
        container.centerY = 0;
        container.addChild(icon);
        return container;
      };
      const cmdWidth = roadmapPanel.width / cols;
      const cmdHeight = roadmapPanel.height / rows;
      const drawWidth = Math.min(cmdHeight, cmdWidth);
      const prevContainer = createControlButton("resources/arrow-leftside.png");
      prevContainer.left = 0;
      prevContainer.on(Laya.Event.CLICK, () => {
        roadmapPanel.refresh();
        roadmapPanel.hScrollBar.value -= drawWidth;
      });
      const nextContainer = createControlButton("resources/arrow-rightside.png");
      nextContainer.right = 0;
      nextContainer.on(Laya.Event.CLICK, () => {
        roadmapPanel.refresh();
        roadmapPanel.hScrollBar.value += drawWidth;
      });
      controlWrapper.addChild(prevContainer);
      controlWrapper.addChild(nextContainer);
      roadmapBox.addChild(controlWrapper);
    }
    SetHistoryData() {
      this.GetHistoryFragment1(this.roadmap.breadplateMatrix, this.breadPlateCols, this.roadmapRows, this.bead_plate_road_panel, this.SetHistoryItem1);
      this.GetHistoryFragment2(this.roadmap.bigRoadMatrix, this.bigRoadCols, this.roadmapRows, this.big_road_panel, this.SetHistoryItem2);
      this.GetHistoryFragment2(this.roadmap.bigEyeBoyMatrix, this.bigEyeRoadCols, this.roadmapRows, this.big_eye_road_panel, this.SetHistoryItem3);
      this.GetHistoryFragment2(this.roadmap.smallRoadMatrix, this.smallRoadCols, this.roadmapRows, this.small_road_panel, this.SetHistoryItem4);
      this.GetHistoryFragment2(this.roadmap.cockroachPigMatrix, this.cockroachRoadCols, this.roadmapRows, this.cockroach_road_panel, this.SetHistoryItem5);
    }
    Reset() {
      this.bead_plate_road_sprite.graphics.clear();
      this.big_road_sprite.graphics.clear();
      this.big_eye_road_sprite.graphics.clear();
      this.small_road_sprite.graphics.clear();
      this.cockroach_road_sprite.graphics.clear();
    }
    static getBaccaratResults(key) {
      const results = [];
      for (const result in BaccaratResult) {
        if (isNaN(Number(result))) {
          continue;
        }
        const value = Number(result);
        if ((key & value) !== 0) {
          results.push(value);
        }
      }
      return results;
    }
    SetHistoryItem1(cmd, result) {
      if (cmd) {
        const relevantResults = 1 /* Banker */ | 2 /* Player */ | 4 /* Tie */ | 8 /* BankerPair */ | 16 /* PlayerPair */;
        result = result & relevantResults;
        const imgUrl = bacResultBreadPlateImgData[result];
        if (imgUrl) {
          cmd.texture = Laya.loader.getRes(imgUrl);
        }
      }
    }
    SetHistoryItem2(cmd, result) {
      if (cmd) {
        const relevantResults = 1 /* Banker */ | 2 /* Player */ | 4 /* Tie */ | 8 /* BankerPair */ | 16 /* PlayerPair */;
        result = result & relevantResults;
        const imgUrl = bacResultBigRoadmImgData[result];
        if (imgUrl) {
          cmd.texture = Laya.loader.getRes(imgUrl);
        }
      }
    }
    GetHistoryFragment1(arr, col, row, panel, callback, isAsk = false) {
      const matrix = [];
      for (let i = 0; i < arr.length; i += row) {
        matrix.push(arr.slice(i, i + row));
      }
      const lastX = matrix.length - 1;
      const lastY = matrix[lastX].length - 1;
      this.fillTexture(matrix, row, col, panel, callback, isAsk, lastX, lastY);
    }
    GetHistoryFragment2(arr, col, row, panel, callback, isAsk = false) {
      const matrix = Array.from({ length: arr.length }, () => Array(row).fill(0));
      let available = row, x = -1, y = -1;
      arr.forEach((row2, i) => {
        available = matrix[i].filter((element) => element === 0).length - 1;
        row2.forEach((col2, j) => {
          x = i;
          y = j;
          if (j > available) {
            x = i + (j - available);
            y = available;
            if (!matrix[x]) {
              matrix[x] = Array(5).fill(0);
            }
          }
          matrix[x][y] = col2;
        });
      });
      this.fillTexture(matrix, row, col, panel, callback, isAsk, x, y);
    }
    SetHistoryItem3(cmd, result) {
      if (cmd) {
        const imgUrl = bacResultBigEyeBoyImgData[result];
        if (imgUrl) {
          cmd.texture = Laya.loader.getRes(imgUrl);
        }
      }
    }
    SetHistoryItem4(cmd, result) {
      if (cmd) {
        const imgUrl = bacResultSmallRoadImgData[result];
        if (imgUrl) {
          cmd.texture = Laya.loader.getRes(imgUrl);
        }
      }
    }
    SetHistoryItem5(cmd, result) {
      if (cmd) {
        const imgUrl = bacResultCockroachPigImgData[result];
        if (imgUrl) {
          cmd.texture = Laya.loader.getRes(imgUrl);
        }
      }
    }
    fillTexture(matrix, row, col, panel, callback, isAsk, lastX = -1, lastY = -1) {
      try {
        const sprite = panel.getChildAt(0);
        sprite.graphics.clear();
        const panelParent = panel.parent;
        const cmdWidth = panelParent.width / col;
        const cmdHeight = panelParent.height / row;
        const drawWidth = Math.min(cmdHeight, cmdWidth);
        let lastCmd = null;
        panel.set_width(cmdWidth * (col - 1));
        matrix.forEach((col2, colIndex) => {
          col2.forEach((cell, cellIndex) => {
            if (cell) {
              const cmd = new Laya.DrawImageCmd();
              cmd.width = drawWidth * 0.8;
              cmd.height = drawWidth * 0.8;
              cmd.x = colIndex * cmdWidth + cmdWidth / 2 - drawWidth / 2.5;
              cmd.y = cellIndex * cmdHeight + cmdHeight / 2 - drawWidth / 2.5;
              callback(cmd, cell);
              sprite.graphics.addCmd(cmd);
              if (colIndex === lastX && cellIndex === lastY) {
                lastCmd = cmd;
              }
            }
          });
        });
        if (lastCmd && isAsk) {
          let isVisible = true;
          const toggle = () => {
            if (isVisible) {
              sprite.graphics.removeCmd(lastCmd);
            } else {
              sprite.graphics.addCmd(lastCmd);
            }
            isVisible = !isVisible;
          };
          const start = () => {
            Laya.timer.loop(500, this, toggle);
            Laya.timer.once(5e3, this, stop);
          };
          const stop = () => {
            Laya.timer.clear(this, toggle);
            sprite.graphics.removeCmd(lastCmd);
            if (!this.isResetting) {
              this.isResetting = true;
              Laya.timer.once(1e3, this, () => {
                this.isResetting = false;
              });
            }
          };
          start();
        }
        sprite.width = matrix.length * cmdWidth;
        Laya.timer.frameOnce(1, this, () => {
          try {
            panel.refresh();
            panel.scrollTo((lastX - 4) * cmdWidth);
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  BacRoadmapV2 = __decorateClass([
    regClass2("tB6fQCgIRcWxnmi7qmaigA")
  ], BacRoadmapV2);
  var Roadmap = class {
    result = [];
    breadplateMatrix = [];
    bigRoadMatrix = [];
    bigEyeBoyMatrix = [];
    smallRoadMatrix = [];
    cockroachPigMatrix = [];
    bigRoadPreviousIdentity = null;
    hasTieBeenAdded = false;
    bigEyeRoadPreviousIdentity = null;
    smallRoadPreviousIdentity = null;
    cockraochRoadPreviousIdentity = null;
    constructor(_results = []) {
      this.result = _results;
      this.result.forEach(this.AddResult.bind(this));
    }
    key2Result(key) {
      if ((key & 1 /* Banker */) !== 0) {
        return 1 /* Banker */;
      }
      if ((key & 2 /* Player */) !== 0) {
        return 2 /* Player */;
      }
      if ((key & 4 /* Tie */) !== 0) {
        return 4 /* Tie */;
      }
    }
    AddResult(key) {
      this.result.push(key);
      this.addBreadPlateRoad(key);
      this.addBigRoad(key);
      const formattedBigRoadMatrix = this.formatBigRoad();
      this.bigEyeBoyMatrix = [];
      this.bigEyeRoadPreviousIdentity = null;
      this.traverseBigRoadScheme(formattedBigRoadMatrix, 0, 2, this.addBigEyeRoad.bind(this));
      this.smallRoadMatrix = [];
      this.smallRoadPreviousIdentity = null;
      this.traverseBigRoadScheme(formattedBigRoadMatrix, 1, 3, this.addSmallRoad.bind(this));
      this.cockroachPigMatrix = [];
      this.cockraochRoadPreviousIdentity = null;
      this.traverseBigRoadScheme(formattedBigRoadMatrix, 2, 4, this.addCockroachRoad.bind(this));
    }
    Reset() {
      this.result = [];
      this.breadplateMatrix = [];
      this.bigRoadMatrix = [];
      this.bigEyeBoyMatrix = [];
      this.smallRoadMatrix = [];
      this.cockroachPigMatrix = [];
      this.bigRoadPreviousIdentity = null;
      this.hasTieBeenAdded = false;
    }
    addBreadPlateRoad(key) {
      this.breadplateMatrix.push(key);
    }
    addBigRoad(key) {
      const identity = this.key2Result(key);
      if (!identity) {
        console.warn(`${key} is not a valid key`);
      }
      const lastRowIndex = this.bigRoadMatrix.length - 1;
      const lastRow = this.bigRoadMatrix[lastRowIndex];
      if (identity === 4 /* Tie */) {
        if (this.bigRoadPreviousIdentity && this.bigRoadPreviousIdentity !== 4 /* Tie */ && !this.hasTieBeenAdded) {
          lastRow[lastRow.length - 1] += 4;
          this.hasTieBeenAdded = true;
        }
      } else if (identity === this.bigRoadPreviousIdentity) {
        this.hasTieBeenAdded = false;
        lastRow.push(key);
      } else {
        this.hasTieBeenAdded = false;
        this.bigRoadMatrix.push([key]);
      }
      if (this.bigRoadMatrix.length > 0 && this.bigRoadMatrix[this.bigRoadMatrix.length - 1].length > 0) {
        this.bigRoadPreviousIdentity = this.key2Result(
          this.bigRoadMatrix[this.bigRoadMatrix.length - 1][this.bigRoadMatrix[this.bigRoadMatrix.length - 1].length - 1]
        );
      } else {
        this.bigRoadPreviousIdentity = null;
      }
    }
    formatBigRoad() {
      const col = 6;
      let lastX = -1, lastY = -1, avaliableLength = col;
      const matrix = Array.from({ length: this.bigRoadMatrix.length }, () => Array(col).fill(0));
      this.bigRoadMatrix.forEach((row, rowIndex) => {
        avaliableLength = matrix[rowIndex].filter((item) => !item).length - 1;
        row.forEach((col2, colIndex) => {
          lastX = rowIndex;
          lastY = colIndex;
          if (colIndex > avaliableLength) {
            lastX = rowIndex + (colIndex - avaliableLength);
            lastY = avaliableLength;
            if (!matrix[lastX]) {
              matrix[lastX] = Array(col2).fill(0);
            }
          }
          matrix[lastX][lastY] = col2;
        });
      });
      return matrix;
    }
    isValidIndex(array, index) {
      return index >= 0 && index < array.length;
    }
    getColumnLength(array) {
      return array.reduce((total, element) => total + (element === 0 ? 1 : 0), 0);
    }
    traverseBigRoadScheme(bigRoadMatrix, startIndex, margin, callback) {
      bigRoadMatrix.forEach((col, colIndex) => {
        if (colIndex > startIndex) {
          col.forEach((cell, cellIndex) => {
            if (!(colIndex === margin - 1 && cellIndex === 0) && cell) {
              if (cellIndex === 0) {
                const prevColALength = this.getColumnLength(bigRoadMatrix[colIndex - 1]);
                const prevColBLength = this.getColumnLength(bigRoadMatrix[colIndex - margin]);
                callback(prevColALength === prevColBLength ? 1 : 2);
              } else {
                const tempIdx = margin - 1;
                const leftColLowerIndex = this.isValidIndex(bigRoadMatrix[colIndex - tempIdx], cellIndex);
                const leftColLowerIdentity = this.key2Result(bigRoadMatrix[colIndex - tempIdx][cellIndex]);
                const leftColUpperIndex = this.isValidIndex(bigRoadMatrix[colIndex - tempIdx], cellIndex - 1);
                const leftColUpperIdentity = this.key2Result(bigRoadMatrix[colIndex - tempIdx][cellIndex - 1]);
                const isMatch = [
                  leftColLowerIndex === leftColUpperIndex,
                  leftColLowerIdentity === leftColUpperIdentity
                ].every(Boolean);
                callback(isMatch ? 1 : 2);
              }
            }
          });
        }
      });
    }
    addBigEyeRoad(key) {
      if (![1, 2].includes(key)) {
        console.warn(`${key} is not a valid color.`);
        return;
      }
      if (this.bigEyeBoyMatrix.length <= 0) {
        this.bigEyeBoyMatrix.push([key]);
      } else {
        const lastRowIndex = this.bigEyeBoyMatrix.length - 1;
        if (this.bigEyeRoadPreviousIdentity === key) {
          this.bigEyeBoyMatrix[lastRowIndex].push(key);
        } else {
          this.bigEyeBoyMatrix.push([key]);
        }
      }
      this.bigEyeRoadPreviousIdentity = key;
    }
    addSmallRoad(key) {
      if (![1, 2].includes(key)) {
        console.warn(`${key} is not a valid color.`);
        return;
      }
      if (this.smallRoadMatrix.length <= 0) {
        this.smallRoadMatrix.push([key]);
      } else {
        const lastRowIndex = this.smallRoadMatrix.length - 1;
        if (this.smallRoadPreviousIdentity === key) {
          this.smallRoadMatrix[lastRowIndex].push(key);
        } else {
          this.smallRoadMatrix.push([key]);
        }
      }
      this.smallRoadPreviousIdentity = key;
    }
    addCockroachRoad(key) {
      if (![1, 2].includes(key)) {
        console.warn(`${key} is not a valid color.`);
        return;
      }
      if (this.cockroachPigMatrix.length <= 0) {
        this.cockroachPigMatrix.push([key]);
      } else {
        const lastRowIndex = this.cockroachPigMatrix.length - 1;
        if (this.cockraochRoadPreviousIdentity === key) {
          this.cockroachPigMatrix[lastRowIndex].push(key);
        } else {
          this.cockroachPigMatrix.push([key]);
        }
      }
      this.cockraochRoadPreviousIdentity = key;
    }
  };
})();
