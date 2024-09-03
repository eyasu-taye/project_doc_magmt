<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\project;
use App\user;
use App\projectdoc;
use Illuminate\Support\Facades\Crypt;
use DB;

class systemcontroller extends Controller
{

            //
    function register_user(Request $request){

     $new_sys = new user();   
     $new_sys->first_name = $request->first_name;
     $new_sys->last_name = $request->last_name;
     $new_sys->email = $request->email;
     $new_sys->department = $request->department;
     $new_sys->password = Crypt::encrypt($request->create_password);
     $new_sys->save(); 

      $response2 = array(
              'status' => 'successful',
          );
      return response()->json($response2); 

    }

            function update_user(Request $request){

         $new_sys = user::find($request->id);  
         $new_sys->first_name = $request->first_name_update;
         $new_sys->last_name = $request->last_name_update;
         $new_sys->email = $request->email_address_update;
         $new_sys->department = $request->department_update;
         $new_sys->password = Crypt::encrypt($request->create_password_update);
         $new_sys->save(); 
         $user_name =$request->email_address_update;

      $response2 = array(
              'user_name' => $user_name,
              'status' => "Data updated successfully",
          );
      return response()->json($response2); 

    }

    function show_to_update_user(Request $request){

      $sys =  DB::select('select * from users where `email`=?', [$request->id]);
      $first_name = null;
      $last_name = null;
      $email = null;
      $department = null;
      $password=null;
      $id=null;
       foreach ($sys as $sy) {
        $first_name = $sy->first_name;
        $last_name = $sy->last_name;
        $email = $sy->email;
        $department = $sy->department;
        $password = Crypt::decrypt($sy->password);
        $id = $sy->id;
   }
      $response2 = array(
              'first_name' => $first_name,
              'last_name' => $last_name,
              'email'=>$email,
              'department'=>$department,
              'password'=>$password,
              'id'=>$id,
          );
      return response()->json($response2); 

    }


        function registernewproject(Request $request){

     $new_sys = new project();   
     $new_sys->project_name = $request->project_name;
     $new_sys->project_description = $request->project_description;
     $new_sys->project_contractor = $request->project_contractor;
     $new_sys->start_date = $request->start_date;
     $new_sys->end_date = $request->end_date;
     $new_sys->project_status = $request->project_status;
     $new_sys->save(); 
      $sys =  DB::select('select * from projects order by updated_at desc limit 1');
      $project_name[] = null;
      $project_description[] = null;
      $project_contractor[] = null;
      $start_date[] = null;
      $end_date[]=null;
      $project_status[]=null;
      $id[]=null;
      $project_docs[] = null;
      $cow = count($sys);
       foreach ($sys as $sy) {
        $project_name[] = $sy->project_name;
        $project_description[] = $sy->project_description;
        $project_contractor[] = $sy->project_contractor;
        $start_date[] = $sy->start_date;
        
        $end_date[] = $sy->end_date;
        $project_status[] = $sy->project_status;
        $id[] = $sy->id;
        $project_docs[] = count(DB::select('select * from projectdocs where `project_name`=?', [str_replace(' ', '', $sy->project_name)]));
        }
      $response2 = array(
              'project_name' => $project_name,
              'project_description' => $project_description,
              'project_contractor'=>$project_contractor,
              'start_date'=>$start_date,
              'end_date'=>$end_date,
              'project_status'=>$project_status,
              'id'=>$id,
              'project_docs' => $project_docs,
              'cow'=>$cow,
          );
      return response()->json($response2); 

    }

    // show projects
            function showproject(Request $request){

      $sys =  DB::select('select * from projects order by updated_at');
      $id[] = null;
      $project_name[] = null;
      $project_description[] = null;
      $project_contractor[] = null;
      $start_date[] = null;
      $end_date[]=null;
      $project_status[]=null;
      $project_docs[] = null;
      $cow = count($sys);
       foreach ($sys as $sy) {
        $project_name[] = $sy->project_name;
        $project_description[] = $sy->project_description;
        $project_contractor[] = $sy->project_contractor;
        $start_date[] = $sy->start_date;
        $id[] = $sy->id;
        
        $end_date[] = $sy->end_date;
        $project_status[] = $sy->project_status;
        $project_docs[] = count(DB::select('select * from projectdocs where `project_name`=?', [str_replace(' ', '', $sy->project_name)]));
        }
      $response2 = array(
              'project_name' => $project_name,
              'project_description' => $project_description,
              'project_contractor'=>$project_contractor,
              'start_date'=>$start_date,
              'end_date'=>$end_date,
              'project_status'=>$project_status,
              'project_docs'=>$project_docs,
              'id'=>$id,
              'cow'=>$cow,
          );
      return response()->json($response2); 

    }
    //show project detial
            function showdetail(Request $request){

      $sys =  DB::select('select * from projects where `project_name`=?', [$request->project_name]);
      // $sysdoc =  DB::select('select * from projectdocs where `project_name`=?', [$request->project_name]);
      $id[] = null;
      $project_name[] = null;
      $project_description[] = null;
      $project_contractor[] = null;
      $start_date[] = null;
      $end_date[]=null;
      $project_status[]=null;
      $project_docs = DB::select('select * from projectdocs where `project_name`=?', [str_replace(' ', '', $request->project_name)]);
      $cow = count($sys);
       foreach ($sys as $sy) {
        $project_name[] = $sy->project_name;
        $project_description[] = $sy->project_description;
        $project_contractor[] = $sy->project_contractor;
        $start_date[] = $sy->start_date;
        $id[] = $sy->id;
        
        $end_date[] = $sy->end_date;
        $project_status[] = $sy->project_status;
        }
        // projet doc details

        $docid[] = null;
        $documet_description[] = null;
        $filelocation[] = null;
        $absolutefilelocation[] = null;
        $numofdoc = count($project_docs);
       foreach ($project_docs as $sy) {
        $docid[] = $sy->id;
        $documet_description[] = $sy->documet_description;
        $faname = explode('$', $sy->filelocation);
        $filelocation[] = $faname[1];
        $absolutefilelocation[] = $sy->filelocation;
        }
      $response2 = array(
              'project_name' => $project_name,
              'project_description' => $project_description,
              'project_contractor'=>$project_contractor,
              'start_date'=>$start_date,
              'end_date'=>$end_date,
              'project_status'=>$project_status,
              'id'=>$id,
              'cow'=>$cow,
              'numofdoc'=>$numofdoc,
              'docid'=>$docid,
              'documet_description'=>$documet_description,
              'filelocation'=>$filelocation,
              'absolutefilelocation'=>$absolutefilelocation,
          );
      return response()->json($response2); 

    }

    //delete project
 // show projects
            function deleteproject(Request $request){

      $sys =  DB::select('select * from projects where `project_name`=?', [$request->deleteproject]);
      foreach ($sys as $edit) {
              $rowid = $edit->id;
              DB::table('projects')->where('id', '=', $rowid)->delete();
           }
      $response2 = array(
              'status'=>"successful",
          );
      return response()->json($response2); 

    }
    // delete document
    function deletedoc(Request $request){

      
              DB::table('projectdocs')->where('id', '=', $request["deletedoc"])->delete();
      $response2 = array(
              'status'=>"successful",
          );
      return response()->json($response2); 

    }
function fileuploadtest(Request $request) {
     
        $dir = 'projectdocs';
        $files =  $request->file('image');
        // $extension = $request->file('image')->getClientOriginalExtension();
        $fileorginalname = $request->file('image')->getClientOriginalName();
        $filename = uniqid() . '_' . time() . '$'. $fileorginalname;
        // $filename = $fileorginalname;
               # code...
                $new_ms = new projectdoc();


                $new_ms->project_name= $request['project_name'];
                $new_ms->documet_description= $request['filecaptiontext'];
                $new_ms->filelocation= '/'.$dir.'/'.$filename;
                $new_ms->save();
                
                $request->file('image')->move($dir, $filename);

                $projectdoc =  DB::select('select * from projectdocs');
                $mscounter = count($projectdoc);

                $response1 = array(

                        'mscounter'=>$mscounter,);
                  return response()->json($response1);
          }



    function editproject(Request $request){
   
      $sys =  DB::select('select * from projects where `project_name`=?', [$request->id]);
      $project_name = null;
      $project_description = null;
      $project_contractor = null;
      $start_date = null;
      $end_date = null;
      $project_status=null;
       foreach ($sys as $sy) {
        $project_name = $sy->project_name;
        $project_description = $sy->project_description;
        $project_contractor = $sy->project_contractor;
        $start_date = $sy->start_date;
        $end_date = $sy->end_date;
        $project_status= $sy->project_status;
   }
      $response2 = array(
              'project_name' => $project_name,
              'project_description' => $project_description,
              'project_contractor'=>$project_contractor,
              'start_date'=>$start_date,
              'end_date'=>$end_date,
              'project_status'=>$project_status,
              // 'remark'=>"<label  onclick='show_to_update_domain(this.id)' id='update_record' class='label-info'>update</label>",
          );
      return response()->json($response2); 

    }
// edit project
        function saveedit(Request $request){
   
      $id =  DB::select('select id from projects where `project_name`=?', [$request->editmodalhead]);
      foreach ($id as $sy) {
        $id = $sy->id;
        break;
        }
        $iddoc =  DB::select('select * from projectdocs where `project_name`=?', [str_replace(' ', '', $request->editmodalhead)]);
        if ($iddoc) {
          # code...
          foreach ($iddoc as $sy) {
            $id = $sy->id;
            $new_sys = projectdoc::find($id);  
            $new_sys->project_name = str_replace(' ', '', $request->edit_project_name);
            $new_sys->save(); 
            }
        }
       $new_sys = project::find($id);  

     $new_sys->project_name = $request->edit_project_name;
     $new_sys->project_description = $request->edit_project_description;
     $new_sys->project_contractor = $request->edit_project_contractor;
     $new_sys->start_date = $request->edit_start_date;
     $new_sys->end_date = $request->edit_end_date;
     $new_sys->project_status = $request->edit_project_status;
     $new_sys->save(); 
      $sys =  DB::select('select * from projects where `id`=?', [$id]);
      $project_name[] = null;
      $project_description[] = null;
      $project_contractor[] = null;
      $start_date[] = null;
      $end_date[]=null;
      $project_status[]=null;
      $project_docs[] = null;
      $cow = count($sys);
       foreach ($sys as $sy) {
        $project_name[] = $sy->project_name;
        $project_description[] = $sy->project_description;
        $project_contractor[] = $sy->project_contractor;
        $start_date[] = $sy->start_date;
        
        $end_date[] = $sy->end_date;
        $project_status[] = $sy->project_status;
        $project_docs[] = count(DB::select('select * from projectdocs where `project_name`=?', [str_replace(' ', '', $sy->project_name)]));
        }
      $response2 = array(
              'project_name' => $project_name,
              'project_description' => $project_description,
              'project_contractor'=>$project_contractor,
              'start_date'=>$start_date,
              'end_date'=>$end_date,
              'project_status'=>$project_status,
              'project_docs'=>$project_docs,
              'id'=>$id,
              'cow'=>$cow,
          );
      return response()->json($response2); 

    }

    // login 
function monitoring(Request $request) {
  if($request->option == "0"){
    $password = null;
    
    $user = DB::select('select * from users where `email`=?', [$request->lgemail]);
        

        if (count($user)) {
          $id = null;
          $email = null;
        foreach ($user as $u) {
          # code...
          $id = $u->id;
          $email = $u->email;
          $password = Crypt::decrypt($u->password);
          // $password = $u->password;
          break;
        }
        if ($password == $request->lgpassword) {
         $tokenid = rand(0, 100000);
         $new_lg = user::find($id);  
         $new_lg->remember_token = $tokenid;
         $new_lg->save(); 
          # code...
           $response2 = array(
              'status' => 1,
              'url' => "/".$email."/".$tokenid,
          );
      return response()->json($response2); 
        }else{
         $response2 = array(
              'status' => 0,
          );
      return response()->json($response2);

        } 

      }
  }else{
    $user = DB::select('select * from users where `email`=? && `remember_token`=?', [$request->lgemail, $request->lgpassword]);
        if (count($user)) {
          $id = null;
          $email = null;
        foreach ($user as $u) {
          # code...
          $id = $u->id;
          $email = $u->email;
          break;
        }
         $new_lg = user::find($id);  
         $new_lg->remember_token = "";
         $new_lg->save(); 
          # code...
           $response2 = array(
              'status' => 1,
              'url' => "/",
          );
      return response()->json($response2); 
        }else{
         $response2 = array(
              'status' => 0,
          );
          return response()->json($response2);
          }
        }  
  }
    function loginhome($id1, $id2) {
              $id1 = $id1;
              $id2 = $id2;
    return view('welcomeafterlogin', compact('id1', 'id2'));
    }



}



